import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "../components/common/ToastContainer";
const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);//toasts is an array because the app can show more than one toast at the same time.

  const showToast = useCallback(//do not rerender this function ever(dependency array is empty
    ({ message, type = "success", duration = 3000 }) => {//object destructuring with default values
      const id = Date.now();//Creates a unique ID for this toast.

      setToasts((prev) => [...prev, { id, message, type }]);//“Take the existing toasts, and add one more”

      setTimeout(() => {//Run this function after duration
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    },
    []
  );

  const removeToast = (id) => {//for user remove action 
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
};
