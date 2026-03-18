import CommentBox from "../common/CommentBox";
import CommentList from "../common/CommentList";
export default function Comments({ repoId, issueId }) {
  return (
    <section className="space-y-6">
      <CommentList repoId={repoId} issueId={issueId} />
      <CommentBox repoId={repoId} issueId={issueId} />
    </section>
  );
}
