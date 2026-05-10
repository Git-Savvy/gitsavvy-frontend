import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SkeletonCard from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";
import CopyButton from "../../common/CopyButton";
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
  if (error)
    return (
      <ErrorMessage message={error.message} containerStyle="w-full h-[450px]" />
    );

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
            className="pb-10 border-b border-NavBorder last:border-0 last:pb-0"
          >
            {/* Header: Displays signature (e.g., "function setupTermynal()") or File Summary title */}
            {chunk.signature ? (
              <>
                <h2 className="text-xl font-semibold text-NavBorder/70 mb-4 p-3 rounded-lg inline-block w-full text-center ">
                  {chunk.signature}
                </h2>
              </>
            ) : (
              chunk.type === "file_summary" && (
                <h1 className="text-3xl font-bold text-NavBorder/70 mb-6 p-3 rounded-lg  w-full text-center ">
                  File Overview
                </h1>
              )
            )}

            {/* Documentation: The AI-generated explanation */}
            {chunk.docs && (
              // <div className="text-lg text-Gray600 leading-relaxed whitespace-pre-wrap mb-6 font-mono">
              //   {chunk.docs}
              // </div>

              <div
                className="
                      prose max-w-none text-text-secondary leading-relaxed
                      [&>p]:flex-wrap 
                      [&>p]:gap-2 
                      [&>img]:block [&>img]:mx-auto [&>img]:!float-none
                      [&_p_img]:max-w-[200px]
                      [&_img]:bg-gray-200
                      [&_img]:inline
                      [&_>_img]:bg-gray-900
                      [&_p_img]:p-2
                      [&_strong]:text-textdark [&_h1]:text-NavBorder/70
                      [&_h2]:text-NavBorder/70 [&_h3]:text-NavBorder/50 [&_h4]:text-NavBorder/40
                      [&_code]:text-indigo-300 [&_pre]:bg-white [&_a]:text-Indigo300 bg-white"
              >
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {chunk.docs}
                </ReactMarkdown>
              </div>
            )}

            {/* Code Block: The raw source code for this specific chunk */}
            {chunk.type === "function" &&
              chunk.code &&
              chunk.code.trim() !== "" && (
                <div className="mt-6">
                  <p className="text-sm font-bold text-Gray400 mb-2 uppercase tracking-widest font-mono">
                    Source Context
                  </p>
                  <div className="flex justify-end rounded-t-xl bg-zinc-900">
                    <CopyButton textToCopy={chunk.code} />
                  </div>
                  <pre className="bg-zinc-900 text-indigo-300 p-6 rounded-b-xl font-mono text-sm overflow-x-auto shadow-inner">
                    <code className="flex flex-col">{chunk.code}</code>
                  </pre>
                </div>
              )}
          </div>
        ))}
      </div>
    </main>
  );
}
