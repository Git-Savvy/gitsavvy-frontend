import { useState, useContext, useMemo, useEffect } from "react";
import { DocsContext } from "../../../context/DocsContext";
import DocumentationRefreshCard from "../../common/DocumentationRefreshCard";
import DocumentationSidebar from "./DocumentationSidebar";
import MainContentCard from "./MainContentCard";
import { getFirstSlug } from "../../../utils/getFirstSlug";
export default function Docs({ repoId }) {
  const { docs } = useContext(DocsContext);

  // Find the specific doc entry for this repo{useMemo ensures that the search only runs if the docs list changes or the repoId changes.}
  const docEntry = useMemo(
    () => docs.find((d) => d.repoId === repoId),
    [docs, repoId],
  );

  // Extract just the pages array for the sidebar since we do not care here about repoid
  const pages = docEntry?.pages || []; //this array represent exact one in mockdata so it preserves the hierarchy

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
    <div className="min-h-screen font-sans text-slate-700">
      <div className="space-y-6">
        <DocumentationRefreshCard docs={docEntry}/>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Pass pages array and the setter function */}
          <DocumentationSidebar
            data={pages}
            ///state and setState to control
            activeSlug={activeSlug}
            onSelect={setActiveSlug}
          />

          {/* Pass the full docEntry and activeSlug to find specific content */}
          <MainContentCard docEntry={docEntry} activeSlug={activeSlug} />
        </div>
      </div>
    </div>
  );
}
