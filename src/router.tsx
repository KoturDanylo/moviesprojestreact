import {MainLayout} from "./Layouts/MainLayouts";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>,
    }
]);

export {
    router
}