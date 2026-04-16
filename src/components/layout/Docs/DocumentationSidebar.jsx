import NavItem from "./NavItem";
import NoDataMessage from "../../messages/NoDataMessage";
import SkeletonCard from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";

export default function DocumentationSidebar({
  repoId,
  initialData, // Now contains { modules: [], files: [] } from the root
  selectedFileId,
  onFileSelect,
  isPending,
  error,
}) {
  // 1. Initial Loading & Error States
  if (isPending)
    return <SkeletonCard containerStyle="w-full md:w-72 h-[450px]" />;
  if (error)
    return (
      <ErrorMessage message={error.message} containerStyle="w-full h-[450px]" />
    );

  const modules = initialData?.modules || [];
  const files = initialData?.files || [];

  if (modules.length === 0 && files.length === 0) {
    return (
      <NoDataMessage
        text="No documentation found for this repository."
        containerStyle="w-full h-[450px] mb-4"
      />
    );
  }

  // 2. Define strictly what counts as "Code" for your AI engine
  const codeExtensions = [".js", ".py", ".ts", ".jsx", ".tsx", ".c", ".cpp",".go",".java",".dart",".h",".swift",".txt"];
  // const ignoredFolders = [".github", "docs", "site", "workflows", "templates"];
  const ignoredFolders = [".github"];

  // 3. Prepare the Tree Data
  // Filter and format files at the root level
  const rootFiles = files
    .filter((file) => {
      const path = file.file_path?.toLowerCase() || "";
      return codeExtensions.some((ext) => path.endsWith(ext));
    })
    .map((file) => ({
      ...file,
      type: "page",
      title: file.file_path?.split("/").pop() || `File ${file.id}`,
    }));

  // Filter and format modules at the root level
  const rootModules = modules
    .filter((module) => {
      const folderName = module.path?.toLowerCase();

      return !ignoredFolders.includes(folderName);
    })
    .map((module) => ({
      ...module,
      type: "folder",
      title: module.path?.split("/").pop() || `Module ${module.id}`,
      children: [], // NavItem will fill this on click
    }));

  const navTreeData = [...rootModules, ...rootFiles];
  return (
    <aside className="w-full md:w-72 bg-white border-2 border-Gray200 rounded-2xl p-6 shadow-sm overflow-y-auto  max-h-[calc(100vh-160px)]">
      <h2 className="text-lg font-bold text-textdark mb-6">Documentation</h2>

      <nav className="space-y-1">
        {navTreeData.map((item) => (
          <NavItem
            key={`${item.type}-${item.id}`}
            item={item}
            repoId={repoId}
            activeSlug={selectedFileId}
            onSelect={onFileSelect}
            depth={0}
          />
        ))}
      </nav>
    </aside>
  );
}
