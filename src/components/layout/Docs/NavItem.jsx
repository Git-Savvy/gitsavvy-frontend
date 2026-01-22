import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileText,
  Code2,
} from "lucide-react";
//depth: A number (0, 1, 2...) that tells the component how far "in" it is.
//This is used to add the left margin (indentation).
export const NavItem = ({ item, depth = 0, activeSlug, onSelect }) => {
  //Each folder manages its own state. If isOpen is true, you see the children. If false, they are hidden. We start with true so the sidebar looks full when the page loads.
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.type === "folder" && item.children?.length > 0;//check if folder and has content inside
  const isActive = activeSlug === item.slug;

  const Icon =
    item.type === "folder"
      ? Folder
      : item.slug?.includes("component")
        ? Code2
        : FileText;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen); // Toggle folder open/close
    } else if (item.slug) {//true only if item has slug(type==page)
      onSelect(item.slug); // Notify parent to change main content
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
        {/**depth represent the depth as if there is depth put margin left. */}
        {hasChildren ? (
          isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )
        ) : (
          <div className="w-4" />//// Keeps things aligned,so that the icons and text of the pages align perfectly with the icons and text of the folders.
        )}

        <Icon
          className={`w-4 h-4 ${isActive ? "text-purple-700" : "text-slate-400"}`}
        />
        <span className="text-sm">{item.title}</span>
      </div>

      {hasChildren && isOpen && (//the content of each folder which may be other files or simple pages
        <div className="mt-1">
          {item.children.map((child, index) => (//call the same component again(recursive )as many as child the current parents have
            <NavItem
              key={index}
              item={child}
              depth={depth + 1}//It passes depth + 1, which is why the sub-items are indented further than the parent.
              activeSlug={activeSlug}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};
