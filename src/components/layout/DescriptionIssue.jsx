export default function DescriptionIssue({issue}) {
  return (
    <section className="space-y-6 border-2 border-gray-200 rounded-xl bg-white p-8 lg:shadow-sm">
      <div>
        <h4 className="font-bold text-gray-900 mb-2">Issue Description</h4>
        <p className="text-gray-600 leading-relaxed">
         {issue.issueDescription}
        </p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-2">Steps to Reproduce</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Navigate to the component in question</li>
          <li>Trigger the specific action</li>
          <li>Observe the unexpected behavior</li>
        </ul>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 overflow-hidden">
        <pre className="text-indigo-300 font-mono text-sm leading-6">
          <code>{`// Example code snippet showing the issue
useEffect(() => {
  // This causes the problem
  fetchData();
}, []);`}</code>
        </pre>
      </div>
    </section>
  );
}
