import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (text, type) => type === "error" ?
    toast.error(text, { position: "top-right" }) :
    toast.success(text, { position: "top-right" })