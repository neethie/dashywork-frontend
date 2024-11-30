import AddNew from "../../pages/home/components/employees/AddNew";
import { useAppStore } from "../../services/useAppStore";
import { ModalType } from "../../types/common/modalTypes";

export default function ShowModal() {
    const { currentModal } = useAppStore();
    switch (currentModal) {
        case ModalType.AddNewEmployee: {
            return <AddNew />;
        }
    }
}
