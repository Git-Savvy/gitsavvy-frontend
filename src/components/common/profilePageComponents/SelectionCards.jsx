import React from "react";
import { Check } from "lucide-react";

export default function SelectionCards({
  title,
  description,
  tags,
  activeColor = "blue",
  type,
  setUser,
  user,
}) {
  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    purple: "bg-purple-50 border-purple-200 text-purple-600",
  };
  const userpref = user.preferences?.[type] || [];
  // Normal function for handling tag clicks
  function handleTagClick(tagName) {
    const newPref = userpref.includes(tagName)
      ? userpref.filter((t) => t !== tagName) // remove tag
      : [...userpref, tagName]; // add tag

    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        [type]: newPref,
      },
    });
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-900 font-semibold">{title}</h2>
        <span className="text-gray-400 text-sm">
          {userpref.length} selected
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-8">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            onClick={() => handleTagClick(tag.name)}
            key={tag.id}
            className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all flex items-center gap-2 ${
              userpref.includes(tag.name)
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
