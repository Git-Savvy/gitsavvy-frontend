export default function ClaimedBanner() {
  return (
    <div className="bg-gradient-to-br from-SCyan to-ECyan border-1 border-NavBorder rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div className="mb-5 md:mb-0">
        <h3 className="text-xl font-semibold text-primary mb-1">
          Issue Already Claimed
        </h3>
        <p className="text-Gray600 text-lg">
          This issue has already been claimed by another contributor. Please
          check other issues.
        </p>
      </div>
    </div>
  );
}
