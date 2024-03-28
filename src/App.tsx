import './App.css'
import './index.css'
import DefaultFooter from "./components/containers/DefaultFooter.tsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/auth/LoginPage.tsx";
import RegisterPage from "./components/auth/RegisterPage.tsx";
import DefaultHeader from "./components/containers/DefaultHeader.tsx";


function App() {

    return (
        <>
            <DefaultHeader/>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>


            </Routes>
            <DefaultFooter/>


        </>
    )
}

export default App