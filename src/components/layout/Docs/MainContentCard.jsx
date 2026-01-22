import { useMemo } from "react";

export default function MainContentCard({ docEntry, activeSlug }) {
  // 1. Helper function to find a page by its slug in a recursive tree
  const findPageBySlug = (items, slug) => {
    for (const item of items) {
      if (item.slug === slug) return item;
      if (item.children) {
        const found = findPageBySlug(item.children, slug);
        if (found) return found;
      }
    }
    return null;
  };

  // 2. Find the current page data
  const currentPage = useMemo(() => {
    if (!docEntry?.pages || !activeSlug) return null;
    return findPageBySlug(docEntry.pages, activeSlug);
  }, [docEntry, activeSlug]);

  // 3. Handle state where no page is found or selected
  if (!currentPage) {
    return (
      <main className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-sm flex items-center justify-center text-slate-400">
        Select a page from the sidebar to view documentation.
      </main>
    );
  }

  const { title, generatedAt, content } = currentPage;

  return (
    <main className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
        {generatedAt && (
          <span className="bg-cyan-50 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-100">
            Generated At:{" "}
            {new Date(generatedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}
          </span>
        )}
      </div>

      {/* Description */}
      {content?.description && (
        <p className="text-slate-600 mb-8 leading-relaxed">
          {content.description}
        </p>
      )}

      {/* Prerequisites Section */}
      {content?.prerequisites && (
        <>
          <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-600 mb-8 ml-2">
            {content.prerequisites.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </>
      )}

      {/* Installation Section */}
      {content?.installation && (
        <>
          <h3 className="text-lg font-semibold mb-4">Installation</h3>
          <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-sm mb-4 overflow-x-auto">
            <span className="text-slate-400">npm install</span>{" "}
            {content.installation.npm.split("install ")[1]}
          </div>
          {content.installation.yarn && (
            <>
              <p className="text-sm text-slate-500 mb-4">Or using yarn:</p>
              <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <span className="text-slate-400">yarn add</span>{" "}
                {content.installation.yarn.split("add ")[1]}
              </div>
            </>
          )}
        </>
      )}

      {/* Usage Section */}
      {content?.usage && (
        <>
          <h3 className="text-lg font-semibold mt-8 mb-4">Basic Usage</h3>
          <pre className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-sm overflow-x-auto whitespace-pre">
            <code>{content.usage.trim()}</code>
          </pre>
        </>
      )}

      {/* Generic List Rendering (for pages like "Features") */}
      {content?.features && (
        <>
          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-3 text-slate-600 ml-2">
            {content.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
