import NavBarButton from "./NavBarButton";

import { IoPeopleOutline } from "react-icons/io5";
import { TbLayoutDashboard } from "react-icons/tb";

import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <aside className="bg-white shadow-2xl p-4 h-screen flex flex-col items-center justify-between z-10 sticky w-max top-0 left-0">
            <div className="space-y-4">
                <Link
                    to={"/"}
                    className="text-[#3170a3] font-black text-2xl text-center"
                >
                    Dw
                </Link>
                <nav className="flex flex-col gap-2">
                    <Link to={"/"}>
                        <NavBarButton active>
                            <TbLayoutDashboard className="w-6 h-6" />
                        </NavBarButton>
                    </Link>
                    <NavBarButton>
                        <IoPeopleOutline className="w-6 h-6" />
                    </NavBarButton>
                </nav>
            </div>

            <button className="p-2 text-[#a33157] hover:scale-105 transition-all">
                <TbLogout2 className="w-6 h-6" />
            </button>
        </aside>
    );
}
