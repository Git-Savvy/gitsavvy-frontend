import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileText,
  Code2,
} from "lucide-react";
export default function DocumentationSidebar() {
  return (
    <aside className="w-full md:w-72 bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm ">
      <h2 className="text-sm font-bold text-slate-800 mb-6">Documentation</h2>

      <nav className="space-y-4 text-sm text-slate-600">
        {/* Repository Overview Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4" />
            <Folder className="w-4 h-4" />
            <span>Repository Overview</span>
          </div>
          <div className="ml-6 space-y-1">
            <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded-lg flex items-center gap-2 font-medium">
              <FileText className="w-4 h-4" />
              Getting Started
            </div>
            <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <FileText className="w-4 h-4" />
              Installation
            </div>
          </div>
        </div>

        {/* API Reference Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4" />
            <Folder className="w-4 h-4" />
            <span>API Reference</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1">
              <ChevronDown className="w-4 h-4" />
              <FileText className="w-4 h-4" />
              <span>Components</span>
            </div>
            <div className="ml-8 space-y-2 text-slate-500">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Button Component
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Input Component
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Card Component
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-1 text-slate-400">
          <ChevronRight className="w-4 h-4" />
          <Folder className="w-4 h-4" />
          <span>Guides</span>
        </div>
      </nav>
    </aside>
  );
}
