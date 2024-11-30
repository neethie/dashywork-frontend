import axios from "axios";
import {
    DraftEmployeeSchema,
    Employee,
    EmployeeSchema,
    EmployeesSchema,
} from "../types/api";
import { safeParse } from "valibot";

type EmployeeData = {
    [k: string]: FormDataEntryValue;
};

export async function addEmployee(data: EmployeeData) {
    try {
        const result = safeParse(DraftEmployeeSchema, {
            name: data.name,
            email: data.email,
            age: +data.age,
            phone: +data.phone,
            position: data.position,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/employees`;
            await axios.post(url, {
                name: result.output.name,
                email: result.output.email,
                age: result.output.age,
                phone: result.output.phone,
                position: result.output.position,
            });
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getEmployees() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/employees`;
        const { data } = await axios(url);
        const result = safeParse(EmployeesSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getEmployeeById(id: Employee["id"]) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/employees/${id}`;
        const { data } = await axios(url);
        const result = safeParse(EmployeeSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function updateEmployee(data: EmployeeData, id: Employee["id"]) {
    try {
        const result = safeParse(EmployeeSchema, {
            id,
            name: data.name,
            email: data.email,
            age: +data.age,
            phone: +data.phone,
            position: data.position,
        });
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/api/employees/${id}`;
            await axios.put(url, result.output);
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEmployee(id: Employee["id"]) {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/employees/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
    }
}
