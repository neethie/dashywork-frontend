import { Link } from "react-router-dom";
import { ButtonTypes } from "../../types/common/buttonTypes";

type ButtonProps = {
    text: string;
    type: number;
    onClick?: () => void;
};

export default function Button({ text, type, onClick }: ButtonProps) {
    const getColor = () => {
        switch (type) {
            case ButtonTypes.Add:
                return "#3170a3";
            case ButtonTypes.Edit:
                return "#f0a500";
            case ButtonTypes.Remove:
                return "#ff0000";
        }
    };
    const getLink = () => {
        switch (type) {
            case ButtonTypes.Add:
                return "/add";
            case ButtonTypes.Edit:
                return "/edit";
            case ButtonTypes.Remove:
                return "/remove";
        }
    };
    return (
        <Link
            to={getLink() || "#"}
            className={`text-white px-4 py-2 rounded-2xl opacity-80 hover:opacity-100 transition-all`}
            style={{
                backgroundColor: getColor(),
            }}
            onClick={onClick}
        >
            {text}
        </Link>
    );
}

/*
    Opcion 1:
    className={`text-white px-2 py-1 rounded-2xl transition-all border-transparent border-2 bg-main-gray hover:scale-105 hover:border-main-blue hover:text-main-blue hover:bg-transparent`}
    Opción 2:
    className={`text-white py-1 px-2 rounded-2xl bg-opacity-80 hover:bg-opacity-100 transition-all hover:scale-105 ${getColor(
                type
            )}`}
*/
