export default function ClaimedBanner() {
  return (
    <div className="bg-gradient-to-br from-SCyan to-ESyan border border-Teal400 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div className="mb-5 md:mb-0">
        <h3 className="font-semibold text-primary mb-1">
          Issue Already Claimed
        </h3>
        <p className="text-text-secondary text-sm">
          This issue has already been claimed by another contributor. Please
          check other issues.
        </p>
      </div>
    </div>
  );
}
