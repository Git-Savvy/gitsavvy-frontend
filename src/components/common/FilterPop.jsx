import React, { useState, useRef, useEffect } from "react";
import { ListFilter } from "lucide-react";

export default function FilterPop() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const labelOptions = [
    "Good First Issue",
    "Help Wanted",
    "Bug",
    "Enhancement",
    "Documentation",
  ];

  const statusOptions = ["Available", "Claimed"];

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-lg font-medium text-slate-700 hover:bg-hoverl transition-colors lg:shadow-sm bg-white"
      >
        <ListFilter className="w-4 h-4" />
        Filter
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 p-5 animate-in fade-in zoom-in duration-150">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Filters</h3>

          {/* Labels Section */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Labels
            </p>
            {labelOptions.map((label) => (
              <label
                key={label}
                className="flex items-center gap-3 cursor-pointer "
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[15px] text-slate-700 group-hover:text-slate-900 transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>

          <hr className="my-5 border-gray-100" />

          {/* Status Section */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Status
            </p>
            {statusOptions.map((status) => (
              <label
                key={status}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <span className="text-[15px] text-slate-700 group-hover:text-slate-900 transition-colors">
                  {status}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
