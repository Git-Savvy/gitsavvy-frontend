import DocumentationRefreshCard from "../common/DocumentationRefreshCard";
import DocumentationSidebar from "./DocumentationSidebar";
import DocCard from "../common/DocCard";
import { Sparkles, RefreshCw } from "lucide-react";
export default function Docs() {
  return (
    <div className="min-h-screen font-sans text-slate-700">
      <div className=" space-y-6">
        {/* 1. Header Card (AI Documentation Engine) */}
        <DocumentationRefreshCard />
        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* 2. Left Sidebar Card */}
          <DocumentationSidebar />
          {/* 3. Main Content Card (Getting Started)  will be converted later to components that change as user navigate through sidebar*/}
          <main className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-10 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-slate-800">
                Getting Started
              </h1>
              <span className="bg-cyan-50 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-100">
                Generated At: 11 Nov
              </span>
            </div>

            <p className="text-slate-600 mb-8">
              This guide will help you get started with{" "}
              <span className="text-slate-800 font-medium font-bold">
                cloud-infrastructure
              </span>
              . Follow these steps to integrate the library into your project.
            </p>

            <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
            <ul className="list-disc list-inside space-y-3 text-slate-600 mb-8 ml-2">
              <li>Node.js version 16 or higher</li>
              <li>npm or yarn package manager</li>
              <li>Basic knowledge of TypeScript and React</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Installation</h3>
            <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-sm mb-4">
              <span className="text-slate-400">npm install</span>{" "}
              cloud-infrastructure
            </div>

            <p className="text-sm text-slate-500 mb-4">Or using yarn:</p>
            <div className="bg-zinc-900 text-zinc-100 p-5 rounded-xl font-mono text-sm">
              <span className="text-slate-400">yarn add</span>{" "}
              cloud-infrastructure
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Basic Usage</h3>
            <div className="h-4 w-1/3 bg-gray-100 rounded animate-pulse"></div>
            {/*to be continued later */}
          </main>
        </div>
      </div>
    </div>
  );
}
