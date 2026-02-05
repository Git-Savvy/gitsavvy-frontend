import { CircleCheckBig } from "lucide-react";
import { Ban } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Info } from "lucide-react";
const toastStyles = {
  success: "bg-teal-500/20 text-teal-500",
  error: "bg-red-500/20 text-red-500",
  warning: "bg-yellow-500/20 text-yellow-500",
  info: "bg-cyan-500/20 text-cyan-500",
};

const toastIcon = {
  success: <CircleCheckBig />,
  error: <Ban />,
  warning: <TriangleAlert />,
  info: <Info />,
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div className="bg-background rounded-xl" key={toast.id}>
          <div
            className={`px-4 py-3 rounded-xl shadow-lg border flex items-center gap-5 animate-slide-in ${toastStyles[toast.type]}`}
          >
            <div className="flex gap-2">
              <span className="font-semibold">{toast.message}</span>
              <span>{toastIcon[toast.type]}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-Gray400 hover:text-Gray600"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
