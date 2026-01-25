import { Link } from "react-router-dom";
import { ArrowLeft, SearchX } from "lucide-react";
import SimpleDarkButton from "../components/common/SimpleDarkButton";
import { useNavigate } from "react-router-dom";
export default function NotFound({ text, button, url }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10 text-center relative overflow-hidden">
        {/* floating gradient blur */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-Purple400/20 rounded-full blur-3xl" />

        {/* icon */}
        <div className="relative z-10 w-20 h-20 mx-auto rounded-2xl  flex items-center justify-center mb-6">
          <SearchX size={42} className="text-NavBorder" />
        </div>

        {/* text */}
        <h1 className="text-6xl font-extrabold text-textdark tracking-tight">
          404
        </h1>

        <p className="text-lg font-semibold text-text-primary mt-3">
          Page not found
        </p>

        <p className="text-Gray600 mt-2 leading-relaxed">{text}</p>

        {/* actions */}

        <div className="mt-8 flex  gap-3 justify-center">
          <SimpleDarkButton
            text={button}
            icon={<ArrowLeft size={18} />}
            onClick={() => navigate(url)}
          />
        </div>
      </div>
    </div>
  );
}
