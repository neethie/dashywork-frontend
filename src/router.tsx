import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home, { loader as employeesLoader } from "./pages/Home";
import AddEmployee, { action as addEmployeeAction } from "./pages/AddEmployee";
import EditEmployee, {
    loader as editEmployeeLoader,
    action as editEmployeeAction,
} from "./pages/EditEmployee";
import { action as deleteEmployee } from "./pages/home/components/employees/Employee";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: employeesLoader,
            },
            {
                path: "/add",
                element: <AddEmployee />,
                action: addEmployeeAction,
            },
            {
                path: "/edit/:id", // ROA PATTERN
                element: <EditEmployee />,
                loader: editEmployeeLoader,
                action: editEmployeeAction,
            },
            {
                path: "/delete/:id",
                action: deleteEmployee,
            },
        ],
    },
]);
