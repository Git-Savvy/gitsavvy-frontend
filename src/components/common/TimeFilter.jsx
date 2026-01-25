import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

const TimeFilter = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Time");
  const periods = ["All Time", "Last 7 Days", "Last 30 Days", "Last Year"];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-background border-2 border-Gray200 hover:bg-background/20 text-textsecondary  px-4 py-2.5 rounded-xl transition-all"
      >
        <Calendar className="w-5 h-5 text-Slate400" strokeWidth={1.5} />
        <span className="text-[15px] font-medium min-w-[100px] text-left">
          {selected}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-Slate400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-Gray200 rounded-xl shadow-lg z-20 py-2">
            {periods.map((period) => (
              <button
                key={period}
                className="w-full text-left px-4 py-2 text-sm hover:bg-background transition-colors"
                onClick={() => {
                  setSelected(period);
                  setIsOpen(false);
                  onSelect(period);
                }}
              >
                {period}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TimeFilter;
