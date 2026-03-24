import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DocumentationRefreshCard from "../../common/DocumentationRefreshCard";
import DocumentationSidebar from "./DocumentationSidebar";
import MainContentCard from "./MainContentCard";
import { useRepoChildren, useDocsByFileId } from "../../../hooks/useDocQuery";
export default function Docs() {
  const { repoId } = useParams();

  // Track selection
  // selectedModuleId is needed for the API path, but we also use it to
  // identify which folder is open in the Sidebar.
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [selectedFileId, setSelectedFileId] = useState(null);

  // 1. Fetch root-level children (modules and files)
  const {
    data: rootData,
    isPending: isRootPending,
    error: rootError,
  } = useRepoChildren(Number(repoId));

  const rootModules = rootData?.modules ?? []; //contain data array (hook extracted it)
  const rootFiles = rootData?.files ?? [];
  // 2. DATA: Fetch docs for selected file
  // 1. Fetch the query
  const {
    data: docsResponse, // Rename this to represent the whole response object
    isPending: isDocsPending,
    error: docsError,
  } = useDocsByFileId(Number(repoId), selectedModuleId, selectedFileId);

  // 2. Safely extract the ARRAY from the "data" key in JSON
  //  API returns { data: [...] }, so we need docsResponse.data
  const docData = docsResponse?.docs ?? [];

  // // Auto-select the first file found at the root level if nothing is selected
  // useEffect(() => {
  //   if (rootFiles.length > 0 && !selectedFileId) {
  //     setSelectedFileId(rootFiles[0].id);
  //     setSelectedModuleId(rootFiles[0].module_id); //the module related to the specific file
  //   }
  // }, [rootFiles, selectedFileId]);

  // Handle file selection (from sidebar)
  const handleFileSelect = (fileId, moduleId) => {
    setSelectedFileId(fileId);
    setSelectedModuleId(moduleId); // Crucial for the STEP 3 API path
  };

  return (
    <div className="min-h-screen font-sans text-Gray600">
      <div className="space-y-6">
        <DocumentationRefreshCard />
        <div className="flex flex-col lg:flex-row gap-6">
          <DocumentationSidebar
            repoId={Number(repoId)}
            initialData={{ modules: rootModules, files: rootFiles }}
            selectedFileId={selectedFileId}
            onFileSelect={handleFileSelect}
            isPending={isRootPending}
            error={rootError}
          />
          <MainContentCard
            docData={docData}
            isPending={isDocsPending}
            error={docsError}
            selectedFileId={selectedFileId}
          />
        </div>
      </div>
    </div>
  );
}
