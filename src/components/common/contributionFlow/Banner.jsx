import { useClaimStatus } from "../../../hooks/useContributionQuery";
import ClaimBanner from "./ClaimBanner";
import ClaimedBanner from "./ClimedBanner";
export default function Banner({ setIsModalOpen, issue }) {
  // Fetch claim status using the custom hook
  const { data: statusData, isPending: isPendingStatus } = useClaimStatus(
    issue.id,
  );
  return (
    <>
      {/* 3. CTA Claim Banner */}
      {statusData?.claim_status == "unclaimed" ? (
        <ClaimBanner setIsModalOpen={setIsModalOpen} />
      ) : (
        <ClaimedBanner setIsModalOpen={setIsModalOpen} statusData={statusData} issueId={issue.id} />
      )}
    </>
  );
}
