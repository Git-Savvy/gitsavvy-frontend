export default function RecommendationInfoCard() {
  return (
    <div className="bg-gradient-to-br from-[#EFF6FF] to-[#FAF5FF]  border border-blue-300 rounded-2xl p-6 flex-col items-center justify-between mb-8">
      <h3 className="text-gray-900 font-semibold mb-4">
        How Recommendations Work
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
        GitSavvy uses your language preferences and technical interests to rank
        repositories based on similarity, popularity, and recency.
        Recommendations update dynamically when you change your preferences.
      </p>
    </div>
  );
}
