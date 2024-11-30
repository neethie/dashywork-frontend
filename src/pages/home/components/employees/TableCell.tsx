type TableCellProps = {
    text: string;
};

export default function TableCell({ text }: TableCellProps) {
    return <td className="px-2">{text}</td>;
}
