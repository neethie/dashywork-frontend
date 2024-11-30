import { number, object, string, InferOutput, array } from "valibot";

export const DraftEmployeeSchema = object({
    name: string(),
    email: string(),
    age: number(),
    phone: number(),
    position: string(),
});

export const EmployeeSchema = object({
    id: number(),
    name: string(),
    email: string(),
    age: number(),
    phone: number(),
    position: string(),
});
export const EmployeesSchema = array(EmployeeSchema);
export type Employee = InferOutput<typeof EmployeeSchema>;
