import React from "react";
import { Check } from "lucide-react";

export default function SelectionCards({
  title,
  description,
  tags,
  activeColor = "blue",
}) {
  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-900 font-semibold">{title}</h2>
        <span className="text-gray-400 text-sm">
          {tags.filter((t) => t.selected).length} selected
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-8">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag.name}
            className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 ${
              tag.selected
                ? colorMap[activeColor]
                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {tag.name} {tag.selected && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
