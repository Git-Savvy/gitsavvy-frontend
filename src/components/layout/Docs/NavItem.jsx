import { useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText, Code2 } from "lucide-react";

export const NavItem = ({ item, depth = 0, activeSlug, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.type === "folder" && item.children?.length > 0;
  const isActive = activeSlug === item.slug;

  const Icon = item.type === "folder" 
    ? Folder 
    : item.slug?.includes("component") ? Code2 : FileText;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else if (item.slug) {
      onSelect(item.slug); // Notify parent to change content
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors
          ${isActive ? "bg-purple-100 text-purple-700 font-medium" : "hover:bg-gray-50 text-slate-600"}
          ${depth > 0 ? "ml-4" : ""}
        `}
      >
        {hasChildren ? (
          isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
        ) : (
          <div className="w-4" />
        )}

        <Icon className={`w-4 h-4 ${isActive ? "text-purple-700" : "text-slate-400"}`} />
        <span className="text-sm">{item.title}</span>
      </div>

      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.children.map((child, index) => (
            <NavItem
              key={index}
              item={child}
              depth={depth + 1}
              activeSlug={activeSlug}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};