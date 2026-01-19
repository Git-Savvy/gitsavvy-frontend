import { Sparkles, RefreshCw } from "lucide-react";
export default function DocumentationRefreshCard() {
  return (
    <header className="bg-white border-2 border-gray-200 rounded-2xl p-8 lg:shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-indigo-900 font-semibold text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          <h1 className="text-textdark">AI Documentation Engine</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-hoverl transition-colors">
          <RefreshCw className="w-4 h-4" />
          Refresh Docs
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
