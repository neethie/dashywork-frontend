import Button from "../../../components/common/Button";
import { ButtonTypes } from "../../../types/common/buttonTypes";
import TableHeader from "./employees/TableHeader";
import { HeaderType } from "../../../types/employees/TableHeaderTypes";

import ShowEmployee from "./employees/Employee";
import { Employee } from "../../../types/api";

type EmployeesProps = {
    employees: Employee[];
};

export default function Employees({ employees }: EmployeesProps) {
    console.log(employees);
    return (
        <>
            <header className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Lista de Empleados</h3>

                <Button text="Agregar" type={ButtonTypes.Add} />
            </header>
            <main className="my-2">
                <table className="w-full text-left border-separate border-spacing-2">
                    <thead className="text-main-gray text-sm">
                        <tr className="">
                            <TableHeader type={HeaderType.ID} text="ID" />
                            <TableHeader type={HeaderType.Name} text="Nombre" />
                            <TableHeader type={HeaderType.Age} text="Edad" />
                            <TableHeader type={HeaderType.Email} text="Email" />
                            <TableHeader
                                type={HeaderType.Phone}
                                text="Teléfono"
                            />
                            <TableHeader
                                type={HeaderType.Position}
                                text="Puesto"
                            />
                            <TableHeader
                                type={HeaderType.Action}
                                text="Acción"
                            />
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <ShowEmployee
                                key={employee.id}
                                employee={employee}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}
