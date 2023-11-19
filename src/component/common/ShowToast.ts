import { toast } from "react-toastify";

const ShowToast = (success: boolean, message: string) => {
	if (success) {
		toast.success(message, {
			autoClose: 3,
		});
	} else  {
		toast.error(message, {
			autoClose: 3,
		});
	}
};

export default ShowToast;
