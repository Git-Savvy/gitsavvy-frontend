import { useState, useMemo, useEffect } from "react";
import DocumentationRefreshCard from "../../common/DocumentationRefreshCard";
import DocumentationSidebar from "./DocumentationSidebar";
import MainContentCard from "./MainContentCard";
import { getFirstSlug } from "../../../utils/getFirstSlug";
import { useParams } from "react-router-dom";
import { useDocsByRepoId } from "../../../hooks/useDocQuery";
export default function Docs() {
  const { repoId } = useParams(); // get repoId from URL params
  const { data: docEntry, isPending, error } = useDocsByRepoId(Number(repoId)); // get docs object for this repo
  // useMemo ensures that the search only runs if the docs changes.}
  // Extract just the pages array for the sidebar since we do not care here about repoid
  //this array represent exact one in mockdata so it preserves the hierarchy
  const pages = useMemo(() => docEntry?.pages || [], [docEntry]);

  // State to track which page is currently selected
  // Start with null or a placeholder
  const [activeSlug, setActiveSlug] = useState(null);

  // Automatically set the first slug when the pages data changes or activeSlug==null
  useEffect(() => {
    if (pages.length > 0 && !activeSlug) {
      const firstSlug = getFirstSlug(pages);
      setActiveSlug(firstSlug);
    }
  }, [pages, activeSlug]);

  return (
    <div className="min-h-screen font-sans text-Gray600">
      <div className="space-y-6">
        <DocumentationRefreshCard docs={docEntry} />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Pass pages array and the setter function */}
          <DocumentationSidebar
            data={pages}
            ///state and setState to control
            activeSlug={activeSlug}
            onSelect={setActiveSlug}
            isPending={isPending}
            error={error}
          />

          {/* Pass the full docEntry and activeSlug to find specific content */}
          <MainContentCard
            docEntry={docEntry}
            activeSlug={activeSlug}
            isPending={isPending}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}
