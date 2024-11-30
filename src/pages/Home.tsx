import { useLoaderData } from "react-router-dom";
import { getEmployees } from "../services/EmployeeService";
import Employees from "./home/components/Employees";
import { Employee } from "../types/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
    const employees = await getEmployees();
    return employees;
}

export default function Home() {
    const employees = useLoaderData() as Employee[];
    return (
        <>
            <header className="flex gap-4 items-center border-b-2 p-4">
                <h3 className="text-lg font-semibold">Miembros</h3>
                <div className="">
                    <button className="text-main-blue font-medium border-b-2 border-main-blue">
                        Vista General
                    </button>
                </div>
            </header>
            <main className="p-4 bg-white my-2 rounded-2xl border-2">
                <Employees employees={employees} />
            </main>
        </>
    );
}
