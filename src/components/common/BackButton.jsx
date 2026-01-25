import { ChevronLeft } from "lucide-react";
export default function BackButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-lg text-Gray600 hover:text-primary mb-8 mt-8 transition-colors"
    >
      <ChevronLeft className="mr-1 w-5 h-5 mt-0.5" />
      {text}
    </button>
  );
}
