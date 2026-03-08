import { Sparkles, RefreshCw } from "lucide-react";
export default function DocumentationRefreshCard() {
  return (
    <header className="border-2 border-NavBorder rounded-2xl p-8 lg:shadow-sm bg-gradient-to-br from-SCyan to-ECyan ">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-Gray600 font-semibold text-xl mb-5 md:mb-0">
          <Sparkles className="w-5 h-5 text-primary" />
          <h1 className="text-textdark">AI Documentation Engine</h1>
        </div>
        {/* <button className="flex items-center gap-2 px-4 py-2 bg-background border-2 border-NavBorder rounded-lg text-medium  text-Gray600 font-medium bg-background hover:outline-1 hover:bg-hoverl transition-colors">
          <RefreshCw className="w-4 h-4" />
          {docs ? "Refresh Docs" : "Create Docs"}
        </button> */}
        {/* May be added in future development*/}
      </div>
      <p className="text-Gray600 leading-relaxed max-w-8xl text-lg">
        Turn complex codebases into clear, easy-to-navigate documentation. Our
        AI analyzes your repository and generates structured explanations
        directly from the source code. Browse the project through an interactive
        explorer, open any file, and instantly see meaningful insights,
        summaries, and relevant code context. It’s a faster way to understand
        how a project works, without digging through every line of code.
      </p>
    </header>
  );
}
