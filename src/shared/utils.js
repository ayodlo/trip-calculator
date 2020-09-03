import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Toast Configuration & Toasts for Input Validators
toast.configure();
const toastConfiguration = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const participantsValidator = (participantsLength, event) => {
    if (participantsLength < 2) {
        event.preventDefault()
        event.stopPropagation()
        return toast.error("⚠️ Must add at least 2 participants!", toastConfiguration);
    }
    return;
}

export const purchasesValidator = (purchasesLength, event) => {
    if (purchasesLength === 0) {
        event.preventDefault()
        event.stopPropagation()
        return toast.error("⚠️ Must add at least one item!", toastConfiguration);
    }
    return;
}

export const titleInputValidator = (title, event) => {
    if (title.length === 0) {
        event.preventDefault()
        event.stopPropagation()
        toast.error("⚠️ Please enter a title!", toastConfiguration);
    }
    return;
}
