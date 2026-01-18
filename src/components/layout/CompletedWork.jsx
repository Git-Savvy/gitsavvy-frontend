export default function CompletedWork() {
  return (
    <div className="space-y-6">
      <div className="border rounded-2xl p-6 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Add authentication middleware</h3>

          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
            Merged
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          Implemented auth middleware for API requests.
        </p>

        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>+100 points</span>
          <span className="text-green-600">+234</span>
          <span className="text-red-500">-45</span>
        </div>
      </div>
    </div>
  );
}
