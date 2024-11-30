import { useAppStore } from "../../services/useAppStore";
import { ModalType } from "../../types/common/modalTypes";

export default function Overlay() {
    const { setModal } = useAppStore();

    const handleClick = () => {
        setModal(ModalType.None);
    };

    return (
        <div
            className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 z-50"
            onClick={handleClick}
        ></div>
    );
}
