type NavBarButtonProps = {
    children: React.ReactNode;
    active?: boolean;
};

export default function NavBarButton({ children, active }: NavBarButtonProps) {
    return (
        <button
            className={`p-2 rounded-xl border-2 border-transparent transition-all hover:scale-105 ${
                !active
                    ? "bg-transparent text-[#cecece] hover:border-[#418ece] hover:text-[#418ece] "
                    : "bg-[#3170a3] text-white "
            }`}
        >
            {children}
        </button>
    );
}
