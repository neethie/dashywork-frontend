import { Outlet } from "react-router-dom";
import NavBar from "./layout/NavBar";

export default function Layout() {
    return (
        <div className="grid grid-cols-[auto_1fr]">
            <NavBar />

            <main className="bg-[#eff0f3] p-4 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}
