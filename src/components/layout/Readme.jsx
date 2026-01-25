import { Laptop, CircleCheckBig } from "lucide-react";
import { useContext } from "react";
import { ReadmeContext } from "../../context/ReadmeContext";
import NoDataMessage from "../messages/NoDataMessage";
export default function Readme({ repoId }) {
  const { readmes } = useContext(ReadmeContext);
  // Use find() because we expect only 1 README per repo
  const readme = readmes.find((r) => r.repoId === parseInt(repoId));

  if (!readme) return <NoDataMessage  containerStyle="flex-1 bg-white border-2 border-Gray200 rounded-2xl p-10 shadow-sm" text="No readme file found."/>;
  else
    return (
      <div className="border-2 border-Gray200 rounded-xl bg-white p-8 lg:shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-NavBorder ">
            <Laptop className="text-NavBorder" />
          </div>
          <h2 className="text-lg font-semibold">Project Overview</h2>
        </div>

        {/* About */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-1">
            About {readme.content[0]}
          </h3>
          <p className="text-Gray600 leading-relaxed">{readme.content[1]}</p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Features</h3>
          <ul className="space-y-3">
            {[
              "Modern architecture with TypeScript and React",
              "Comprehensive documentation and examples",
              "Active community and regular updates",
              "Extensive test coverage",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CircleCheckBig className="text-green-600" />

                <span className="text-Gray600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Getting Started */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-3">Getting Started</h3>
          <pre className="rounded-xl bg-black p-4 text-sm text-NavText1 overflow-x-auto">
            <code>npm install cloud-infrastructure</code>
          </pre>
        </div>

        {/* Quick Example */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Example</h3>
          <pre className="rounded-xl bg-black p-4 text-sm text-NavText1 overflow-x-auto">
            <code>
              {`import { Component } from 'cloud-infrastructure';
export default function App() {
return <Component />;}`}
            </code>
          </pre>
        </div>
      </div>
    );
}
