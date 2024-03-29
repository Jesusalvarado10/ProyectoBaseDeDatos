import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../Context/contex";
import { NavBar } from "../Navbar/navbar";

export function Layout() {


    
    return (
        <AuthProvider>
        <main data-theme="dark">
            <NavBar />
            <section >
                <Outlet />
               
            </section>
        </main>
        </AuthProvider>
    )}