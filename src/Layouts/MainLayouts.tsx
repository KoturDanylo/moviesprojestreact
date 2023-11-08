import {Header} from "../Components/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
        <Outlet/>
        </div>
    );
};

export {MainLayout};