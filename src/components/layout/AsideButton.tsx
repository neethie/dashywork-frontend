type AsideButtonProps = {
    children: React.ReactNode;
    active?: boolean;
    color: string;
};

export default function AsideButton({
    children,
    active,
    color,
}: AsideButtonProps) {
    const hoverColors = `hover:border-${color} hover:text-${color}`;

    return (
        <button
            className={`p-2 rounded-xl border-2 transition-all hover:scale-105 ${
                !active ? hoverColors : "border-white"
            }`}
            style={{
                backgroundColor: active ? color : "white",
                color: active ? "white" : "#c0c0c0",
            }}
        >
            {children}
        </button>
    );
}
