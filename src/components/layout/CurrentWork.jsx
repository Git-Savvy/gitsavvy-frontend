export default function CurrentWork() {
  return (
    <div className="space-y-6">
      {/* card */}
      <div className="border rounded-2xl p-6 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Add dark mode support</h3>
          <span className="px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-700">
            In Progress
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          Implement dark mode with system preference detection.
        </p>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>75%</span>
          </div>

          <div className="h-2 rounded-full bg-gray-100">
            <div className="h-2 w-[75%] bg-teal-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
