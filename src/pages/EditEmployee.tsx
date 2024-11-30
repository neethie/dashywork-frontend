import {
    ActionFunctionArgs,
    Form,
    useActionData,
    redirect,
    LoaderFunctionArgs,
    useLoaderData,
} from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { Employee } from "../types/api";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());

    let error = "";

    if (Object.values(data).includes("")) {
        error = "Todos los campos son requeridos";
    }
    if (error.length) {
        return error;
    }

    if (params.id !== undefined) {
        await updateEmployee(data, +params.id);
        return redirect("/");
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
    if (params.id !== undefined) {
        const employee = await getEmployeeById(+params.id);
        if (!employee) {
            return redirect("/");
        }
        return employee;
    }
}

export default function AddEmployee() {
    const error = useActionData() as string;
    const employee = useLoaderData() as Employee;
    return (
        <>
            <div className="flex flex-col justify-center items-center h-full space-y-2">
                {error && (
                    <div className="flex justify-center bg-red-500 shadow-sm rounded-md">
                        <p className="text-center text-white px-4 uppercase font-medium">
                            {error}
                        </p>
                    </div>
                )}

                <div className=" bg-white p-4  w-2/5 shadow-lg rounded-2xl">
                    <h3 className="text-2xl font-bold text-center pb-4">
                        Editar empleado
                    </h3>
                    <Form method="POST" className="my-2 space-y-2">
                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Jonathan Morales"
                                defaultValue={employee.name}
                                className="border-2 rounded-xl px-2 py-1 focus:outline-none focus:border-main-blue"
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="correo@dominio.com"
                                defaultValue={employee.email}
                                className="border-2 rounded-xl px-2 py-1 focus:outline-none focus:border-main-blue"
                            />
                        </div>

                        <div className="flex lg:flex-row justify-between flex-col">
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="age"
                                    className="text-sm font-medium"
                                >
                                    Edad
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    id="age"
                                    min={18}
                                    max={60}
                                    placeholder="18"
                                    defaultValue={employee.age}
                                    className="border-2 rounded-xl px-2 py-1 focus:outline-none focus:border-main-blue"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-medium"
                                >
                                    Teléfono
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="12345678"
                                    defaultValue={employee.phone}
                                    min={10000000}
                                    max={99999999}
                                    className="border-2 rounded-xl px-2 py-1 focus:outline-none focus:border-main-blue"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label
                                    htmlFor="position"
                                    className="text-sm font-medium"
                                >
                                    Puesto
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    id="position"
                                    placeholder="CEO"
                                    defaultValue={employee.position}
                                    className="border-2 rounded-xl px-2 py-1 focus:outline-none focus:border-main-blue"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <input
                                type="submit"
                                value="Editar"
                                className="bg-main-blue opacity-80 text-white py-1 px-6 rounded-xl hover:opacity-100 transition-all cursor-pointer"
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
