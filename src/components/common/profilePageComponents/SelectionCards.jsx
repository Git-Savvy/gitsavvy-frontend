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
    blue: "bg-Cyan50 border-Teal400 text-Teal400",
    purple: "bg-Purple50 border-Purple400 text-Purple400",
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
    <div className="bg-white border border-Gray200 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
        <h2 className="text-textdark font-semibold">{title}</h2>
        <span className="text-Slate400 text-sm">
          {userpref.length} selected
        </span>
      </div>
      <p className="text-Gray600 text-sm mb-8">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            onClick={() => handleTagClick(tag.name)}
            key={tag.id}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all flex items-center gap-2 ${
              userpref.includes(tag.name)
                ? colorMap[activeColor]
                : "bg-white border-Gray200 text-Gray600 hover:border-Gray400"
            }`}
          >
            {tag.name} {tag.selected && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
