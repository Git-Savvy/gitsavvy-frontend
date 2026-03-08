import SkeletonCard from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";

export default function MainContentCard({
  docData, // Array of chunks from the docs endpoint
  isPending, // Loading state for Step 3
  error, // Error state for Step 3
  selectedFileId, // Currently active file ID
}) {
  // 1. No File Selected State
  if (!selectedFileId) {
    return (
      <main className="flex-1 flex items-center justify-center bg-white border-2 border-Gray200 rounded-2xl p-10 shadow-sm text-lg text-Gray400">
        Please select a code file from the explorer to view its documentation.
      </main>
    );
  }

  // 2. Loading State
  if (isPending) return <SkeletonCard containerStyle="w-full h-[450px]" />;

  // 3. Error State
  if (error) return <ErrorMessage message={error.message} containerStyle="w-full h-[450px]" />;

  // 4. File Selected but no Chunks returned by DB
  if (docData && docData.length === 0) {
    console.log("no file data");
    return (
      <main className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-Gray200 rounded-2xl p-10 shadow-sm text-center">
        <h3 className="text-xl font-bold text-Gray700 mb-2">
          No Documentation Found
        </h3>
        <p className="text-Gray500 max-w-md">
          This file has been identified as code, but the AI documentation engine
          hasn't processed its chunks yet.
        </p>
      </main>
    );
  }

  // 5. Success State: Render Chunks
  return (
    <main className="flex-1 bg-white border-2 border-Gray200 rounded-2xl p-10 shadow-sm overflow-y-auto max-h-[calc(100vh-160px)]">
      <div className="space-y-12">
        {docData.map((chunk, index) => (
          <div
            key={chunk.chunk_id || index}
            className="pb-10 border-b border-Gray100 last:border-0 last:pb-0"
          >
            {/* Header: Displays signature (e.g., "function setupTermynal()") or File Summary title */}
            {chunk.signature ? (
              <h2 className="text-xl font-semibold text-NavBorder mb-4 bg-Nav/70 p-3 rounded-lg border border-Gray200 inline-block w-full text-center">
                {chunk.signature}
              </h2>
            ) : (
              chunk.type === "file_summary" && (
                <h1 className="text-3xl font-bold text-NavBorder mb-6 p-3 rounded-lg w-full text-center bg-Nav/70">
                  File Overview
                </h1>
              )
            )}

            {/* Documentation: The AI-generated explanation */}
            {chunk.docs && (
              <div className="text-lg text-Gray600 leading-relaxed whitespace-pre-wrap mb-6 font-mono">
                {chunk.docs}
              </div>
            )}

            {/* Code Block: The raw source code for this specific chunk */}
            {chunk.code && chunk.code.trim() !== "" && (
              <div className="mt-6">
                <p className="text-sm font-bold text-Gray400 mb-2 uppercase tracking-widest font-mono">
                  Source Context
                </p>
                <pre className="bg-zinc-900 text-zinc-100 p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-inner">
                  <code className="block">{chunk.code}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
