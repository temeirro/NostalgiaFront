import {IUploadedFile} from "./imageconvert.ts";

export interface IImageItem {
    id: number;
    imagePath: string;
}

export interface IRegister {
    firstName: string,
    lastName: string,
    imagePath: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export interface IRegisterForm {
    firstName: string;
    lastName: string;
    imagePath: IUploadedFile | null;
    email: string;
    password: string;
}

export interface ILogin {
    email: string,
    password: string
}
export interface ILoginResult {
    token: string
}