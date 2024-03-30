import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../Context/contex";
import { NavBar } from "../Navbar/navbar";
import { NextUIProvider } from "@nextui-org/react";

export function Layout() {


    
    return (
        <NextUIProvider>
        <AuthProvider>
        <main data-theme="dark">
            <NavBar />
            <section  >
                <Outlet />
               
            </section>
        </main>
        </AuthProvider>
        </NextUIProvider>
    )}