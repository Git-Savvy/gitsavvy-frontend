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
        className="flex items-center gap-3 bg-[#f8f9fb] hover:bg-gray-100 text-gray-800 px-4 py-2.5 rounded-xl transition-all border border-transparent"
      >
        <Calendar className="w-5 h-5 text-slate-500" strokeWidth={1.5} />
        <span className="text-[15px] font-medium min-w-[100px] text-left">
          {selected}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2">
            {periods.map((period) => (
              <button
                key={period}
                className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors"
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
