export default function RecommendationInfoCard() {
  return (
    <div className="bg-gradient-to-br from-SCyan to-ECyan border border-NavBorder rounded-2xl p-6 flex-col items-center justify-between mb-8">
      <h3 className="text-textdark font-semibold mb-4 text-xl">
        How Recommendations Work
      </h3>
      <p className="text-Gray600 text-lg leading-relaxed max-w-4xl">
        GitSavvy uses your language preferences and technical interests to rank
        repositories based on similarity, popularity, and recency.
        Recommendations update dynamically when you change your preferences.
      </p>
    </div>
  );
}
