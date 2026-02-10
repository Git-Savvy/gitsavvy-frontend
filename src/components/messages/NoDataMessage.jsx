import { SearchAlert } from "lucide-react";
export default function NoDataMessage({ containerStyle, text, icon }) {
  return (
    <div
      className={`${containerStyle} flex items-center justify-center text-slate-400 text-xl gap-4`}
    >
      {text} {icon ? icon : ""}
    </div>
  );
}
