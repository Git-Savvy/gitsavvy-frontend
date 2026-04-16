import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileText,
  Code2,
  Loader2,
} from "lucide-react";
import { useRepoChildren } from "../../../hooks/useDocQuery";

export default function NavItem({
  item,
  depth,
  activeSlug,
  onSelect,
  repoId, // Passed down from Sidebar/Docs
}) {
  const [isOpen, setIsOpen] = useState(false); // Start closed for subfolders

  const isFolder = item.type === "folder";

  // 1. Fetch children ONLY if it's a folder and it is open
  const { data, isPending } = useRepoChildren(repoId, item.id, {
    enabled: isFolder && isOpen,
  });

  const isActive = !isFolder && activeSlug === item.id;

  // 2. Define strictly what counts as "Code" for filtering
  const codeExtensions = [".js", ".py", ".ts", ".jsx","go" ,".dart",".tsx", ".c", ".cpp",".java",".swift"];

  const ignoredFolders = [".github"];

  // 3. Process and filter the children data from the API
  const childrenModules = (data?.modules ?? []).filter((m) => {
    const name = m.path?.toLowerCase().split("/").pop();
    return !ignoredFolders.includes(name);
  });

  const childrenFiles = (data?.files ?? [])
    .filter((file) => {
      const path = file.file_path?.toLowerCase() || "";
      return codeExtensions.some((ext) => path.endsWith(ext));
    })
    .map((file) => ({
      ...file,
      type: "page",
      title: file.file_path?.split("/").pop() || "Untitled File",
    }));

  const allChildren = [
    ...childrenModules.map((m) => ({
      ...m,
      type: "folder",
      title: m.path,
    })),
    ...childrenFiles,
  ];

  const hasChildren = allChildren.length > 0;

  const Icon = isFolder
    ? Folder
    : item.title?.includes(".js") ||
        item.title?.includes(".py") ||
         item.title?.includes(".go") ||
         item.title?.includes(".c") ||
         item.title?.includes(".cpp") ||
          item.title?.includes(".java") ||
           item.title?.includes(".dart") ||
            item.title?.includes(".ts") ||
             item.title?.includes(".swift") ||
        item.title?.includes("component")
      ? Code2
      : FileText;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isFolder) {
      setIsOpen(!isOpen);
    } else {
      // Pass the file ID and the parent module ID for the Step 3 API
      onSelect(item.id, item.module_id);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors
          ${isActive ? "bg-Nav/50 text-NavBorder font-medium" : "hover:bg-primaryLableBg text-Gray600"}`}
        style={{ marginLeft: depth * 16 }}
      >
        {isFolder ? (
          isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )
        ) : (
          <div className="w-4" />
        )}

        {/* Show a loader icon if the folder is fetching its children */}
        {isPending && isOpen ? (
          <Loader2 className="w-4 h-4 animate-spin text-Gray400" />
        ) : (
          <Icon
            className={`w-4 h-4 min-w-4 ${isActive ? "text-NavBorder" : "text-Slate400"}`}
          />
        )}

        <span className="text-base truncate">{item.title}</span>
      </div>

      {isFolder && isOpen && hasChildren && (
        <div className="mt-1">
          {allChildren.map((child) => (
            <NavItem
              key={`${child.type}-${child.id}`}
              item={child}
              depth={depth + 1}
              activeSlug={activeSlug}
              onSelect={onSelect}
              repoId={repoId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
