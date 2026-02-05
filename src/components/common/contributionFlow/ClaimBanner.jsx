import SimpleDarkButton from "../SimpleDarkButton";
export default function ClaimBanner({setIsModalOpen}) {
  return (
    <div className="bg-gradient-to-br from-SCyan to-ECyan  border  border-NavBorder rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between mb-8 ">
      <div className="mb-5 md:mb-0">
        <h3 className="text-2xl font-semibold text-primary mb-1">
          Ready to contribute?
        </h3>
        <p className="text-Gray600 text-lg">
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
