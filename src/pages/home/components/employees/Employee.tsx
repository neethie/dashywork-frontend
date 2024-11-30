import { deleteEmployee } from "../../../../services/EmployeeService";
import { Employee } from "../../../../types/api";
import TableCell from "./TableCell";
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";

type EmployeeProps = {
    employee: Employee;
};

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteEmployee(+params.id);
    }
    return redirect("/");
}

export default function ShowEmployee({ employee }: EmployeeProps) {
    return (
        <tr>
            <TableCell text={employee.id.toString()} />
            <TableCell text={employee.name} />
            <TableCell text={employee.age.toString()} />
            <TableCell text={employee.email} />
            <TableCell text={employee.phone.toString()} />
            <TableCell text={employee.position} />
            <td className="flex items-center justify-center gap-2">
                <Link
                    to={`/edit/${employee.id}`}
                    className="bg-main-blue opacity-80 hover:opacity-100 text-white px-3 rounded-md"
                >
                    Editar
                </Link>
                <Form
                    method="POST"
                    action={`delete/${employee.id}`}
                    onSubmit={(e) => {
                        if (!confirm("¿Eliminar?")) {
                            e.preventDefault();
                        }
                    }}
                >
                    <input
                        type="submit"
                        value="Eliminar"
                        className="bg-red-500 opacity-80 hover:opacity-100 text-white px-3 rounded-md cursor-pointer"
                    />
                </Form>
            </td>
        </tr>
    );
}
