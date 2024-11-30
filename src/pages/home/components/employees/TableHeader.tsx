import { HeaderType } from "../../../../types/employees/TableHeaderTypes";

type TableHeaderProps = {
    text: string;
    type: number;
};

export default function TableHeader({ text, type }: TableHeaderProps) {
    const getWidth = (type: number) => {
        switch (type) {
            case HeaderType.ID:
                return "w-[50px]";
            case HeaderType.Name:
                return "w-[250px]";
            case HeaderType.Age:
                return "w-[50px]";
            case HeaderType.Email:
                return "w-[250px]";
            case HeaderType.Phone:
                return "w-[150px]";
            case HeaderType.Position:
                return "w-[150px]";
            case HeaderType.Action:
                return "w-[100px]";
            default:
        }
    };

    return (
        <th
            className={`font-light bg-[#dfdede] text-black py-1 px-2 rounded-md text-sm ${getWidth(
                type
            )}`}
        >
            {text}
        </th>
    );
}
