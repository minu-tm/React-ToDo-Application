import {toast} from 'react-toastify';

const options = {
    autoClose: 1000,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT,
  };
  
  export const showSuccessToast = (message, autoClose) => {
    const delay = autoClose !== undefined ? autoClose : 3000;
    toast.success(message, { ...options, autoClose: delay });
  };

  export const showErrorToast = (message, autoClose) => {
    const delay = autoClose !== undefined ? autoClose : 3000;
    toast.error(message, { ...options, autoClose: delay });
  };
  
  export const showInfoToast = (message, autoClose) => {
    const delay = autoClose !== undefined ? autoClose : 3000;
    toast.info(message, { ...options, autoClose: delay });
  };
  
  export const showWarningToast = (message, autoClose) => {
    const delay = autoClose !== undefined ? autoClose : 3000;
    toast.warning(message, { ...options, autoClose: delay });
  };