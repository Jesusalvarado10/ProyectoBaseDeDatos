import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../Context/contex";
import { NavBar } from "../Navbar/navbar";

export function Layout() {


    
    return (
        <AuthProvider>
        <main>
            <NavBar />
            <section className="mb-9" >
                <Outlet />
               
            </section>
        </main>
        </AuthProvider>
    )}