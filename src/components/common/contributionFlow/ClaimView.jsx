export default function ClimView({ onNext }) {
  return (
    <div className="space-y-5">
      <p className="text-gray-600 text-sm">
        You're about to claim this issue. Once claimed, other contributors will
        be notified that you're working on it.
      </p>
      <div className="bg-[#FFFBEB] border border-[#FEF3C7] p-4 rounded-xl">
        <p className="text-sm text-[#92400E]">
          <span className="font-bold">Note:</span> This will prevent duplicate
          work. Make sure you're ready to start!
        </p>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Claim This Issue
      </button>
    </div>
  );
}
