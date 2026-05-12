import { CircleCheckBig, Ban, TriangleAlert, Info, X } from "lucide-react";

const toastStyles = {
  success: "border-teal-500/50 bg-teal-500/30 text-teal-500",
  error: "border-red-500/50 bg-red-500/30 text-red-500",
  warning: "border-yellow-500/50 bg-yellow-500/30 text-yellow-500",
  info: "border-cyan-500/50 bg-cyan-500/30 text-cyan-500",
};

const toastIcon = {
  success: <CircleCheckBig size={20} />,
  error: <Ban size={20} />,
  warning: <TriangleAlert size={20} />,
  info: <Info size={20} />,
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-20 right-5 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            pointer-events-auto
            flex items-center gap-4 
            min-w-[320px] max-w-sm
            px-4 py-3 rounded-2xl border 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            backdrop-blur-2xl
            animate-toast-in
            transition-all duration-300
            ${toastStyles[toast.type]}
          `}
        >
          {/* Icon Container */}
          <div className="shrink-0 opacity-90">{toastIcon[toast.type]}</div>

          {/* Message */}
          <div className="flex-1 text-sm font-medium leading-tight">
            {toast.message}
          </div>

          {/* Close Button */}
          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 p-1 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/10 opacity-50 hover:opacity-100"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
