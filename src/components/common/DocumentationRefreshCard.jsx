import { Sparkles, RefreshCw } from "lucide-react";
export default function DocumentationRefreshCard({ docs }) {
  return (
    <header className="border-2 border-gray-200 rounded-2xl p-8 lg:shadow-sm bg-gradient-to-br from-[#EFF6FF] to-[#FAF5FF] ">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-indigo-900 font-semibold text-lg mb-5 md:mb-0">
          <Sparkles className="w-5 h-5 text-primary" />
          <h1 className="text-textdark">AI Documentation Engine</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-white transition-colors">
          <RefreshCw className="w-4 h-4" />
          {docs ? "Refresh Docs" : "Create Docs"}
        </button>
      </div>
      <p className="text-slate-500 leading-relaxed max-w-4xl">
        AI-generated documentation is automatically updated when code changes
        are detected. Documentation is organized hierarchically from
        repository-level overview down to individual functions.
      </p>
    </header>
  );
}
