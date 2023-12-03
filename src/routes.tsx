import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeMobile from "./pages/HomeMobile/HomeMobile";

export default function AppRouter() {

    return(
        <BrowserRouter>
            <Routes>
                {
                    window.innerWidth <= 375 ?
                        <Route element={<HomeMobile/>} path='/'/>
                        :
                        <Route element={<Home/>} path='/'/>
                }
            </Routes>
        </BrowserRouter>
    )
}