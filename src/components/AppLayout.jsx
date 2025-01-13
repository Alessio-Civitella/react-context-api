import { Outlet } from "react-router-dom";
import AppNavList from "./AppNavList";

export default function AppLayout() {
    return(
        <>
            <AppNavList/>
            <Outlet/>
        </>
    )
}