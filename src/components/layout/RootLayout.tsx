import {Outlet} from "react-router-dom";
import {Header} from "../Shared/Header";

export function RootLayout() {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}