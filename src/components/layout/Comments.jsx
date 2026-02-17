import CommentBox from "../common/CommentBox";
import CommentList from "../common/CommentList";
export default function Comments({ issueId }) {
  return (
    <section className="space-y-6">
      <CommentList issueId={issueId} />
      <CommentBox issueId={issueId} />
    </section>
  );
}
