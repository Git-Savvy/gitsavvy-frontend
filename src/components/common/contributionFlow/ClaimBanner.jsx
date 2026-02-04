import SimpleDarkButton from "../SimpleDarkButton";
export default function ClaimBanner({setIsModalOpen}) {
  return (
    <div className="bg-gradient-to-br from-SCyan to-ESyan  border border-Teal400 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between mb-8 ">
      <div className="mb-5 md:mb-0">
        <h3 className="font-semibold text-primary mb-1">
          Ready to contribute?
        </h3>
        <p className="text-text-secondary text-sm">
          This issue is available for contributors. Claim it to start working!
        </p>
      </div>
      <SimpleDarkButton
        onClick={() => {
          setIsModalOpen(true);
        }}
        text=" Claim Issue"
      />
    </div>
  );
}
