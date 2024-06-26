import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';
import {RejectedAction} from "../../utils/types/redux";
import {IAccountState, IUser} from "../../interfaces/auth.ts";
import {addLocalStorage, deleteLocalStorage} from "../../utils/storage/localStorageUtils.ts";
import {Status} from "../../utils/enums";
import {login, register} from "./accounts.actions.ts";
import http_common from "../../../http_common.ts";

function isRejectedAction(action: AnyAction): action is RejectedAction {
    return action.type.endsWith('/rejected');
}
const updateUserState = (state: IAccountState, token: string): void => {
    console.log(token);
    const { UserName, FirstName, LastName, Role, ImagePath, Id, Email } = jwtDecode<IUser>(token);
    console.log("updated");
    state.user = {
        UserName,
        FirstName,
        LastName,
        Role,
        ImagePath,
        Id,
        Email
    };
    state.token = token;
    state.isLogin = true;
    // Set isAdmin property
    state.isAdmin = Role.toLowerCase() === 'admin';

    addLocalStorage('authToken', token);
    http_common.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};



//state - нашого редюсера
const initialState: IAccountState = {
    user: null,
    token: null,
    isLogin: false,
    isAdmin: false,
    status: Status.IDLE,
};

export const accountsSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<string>) => {
            updateUserState(state, action.payload);
        },
        //Залогінити користувача
        autoLogin: (state, action: PayloadAction<string>) => {
            updateUserState(state, action.payload);
        },
        //провести вихід із системи
        logout: (state) => {
            deleteLocalStorage('authToken');
            state.user = null;
            state.token = null;
            state.isLogin = false;
            state.isAdmin = false;
        },
    },
    extraReducers: (builder) => {
        builder
            //команда завершена - логінимо користувача
            .addCase(login.fulfilled, (state, action) => {
                const {token} = action.payload;
                updateUserState(state, token);
                state.status = Status.SUCCESS;
            })
            //режим очікування
            .addCase(login.pending, (state) => {
                state.status = Status.LOADING;
            })
            //реєстрація успішна - завершена
            .addCase(register.fulfilled, (state, action) => {
                const {token} = action.payload;
                updateUserState(state, token);
                state.status = Status.SUCCESS;
            })
            //реєстрація іде
            .addCase(register.pending, (state) => {
                state.status = Status.LOADING;
            })
            //якщо щось пішло не так
            .addMatcher(isRejectedAction, (state) => {
                state.status = Status.ERROR;
            });
    },
});

export const { autoLogin, logout } = accountsSlice.actions;
export default accountsSlice.reducer;