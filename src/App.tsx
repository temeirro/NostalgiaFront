import './App.css'
import './index.css'
import DefaultFooter from "./components/containers/DefaultFooter.tsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/auth/LoginPage.tsx";
import RegisterPage from "./components/auth/RegisterPage.tsx";
import DefaultHeader from "./components/containers/DefaultHeader.tsx";
import AnimatedCursor from "react-animated-cursor";
import MemoriesPage from "./components/memories/MemoriesPage.tsx";


function App() {

    return (
        <>
            <AnimatedCursor  color='229, 179, 179'
            />
            <DefaultHeader/>
            <Routes>
                <Route index element={<MemoriesPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>


            </Routes>
            <DefaultFooter/>


        </>
    )
}

export default App