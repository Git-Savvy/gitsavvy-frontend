import { useCommentsByIssueId } from "../../hooks/useCommentQuery";
import { timeAgo } from "../../utils/timeAgo";
import SkeletonCard from "../messages/SkeletonCard";
import ErrorMessage from "../messages/ErrorMessage";
import NoDataMessage from "../messages/NoDataMessage";
export default function CommentList({ repoId,issueId }) {
  const {
    data: comments = [],
    isPending,
    error,
  } = useCommentsByIssueId(repoId, issueId);

  if (isPending)
    return (
      <div className="space-y-6">
        {Array.from({ length: 1 }).map((_, index) => (
          <SkeletonCard key={index} containerStyle="h-[80px]" />
        ))}
      </div>
    );
  if (error)
    return <ErrorMessage containerStyle="h-[450px]" message={error.message} />;
  if (!comments || comments.length==0)
    return (
      <NoDataMessage containerStyle="my-15" text="No comments yet. Be the first to share your thoughts." />
    );

  return (
    <>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 p-4  border-2 border-Gray200 rounded-xl bg-white "
        >
          {
            <img
              src={comment.avatar_url}
              className="w-10 h-10 rounded-full"
              alt="avatar"
            />
          }
          <div>
            <div className="flex gap-2 items-center mb-1">
              <span className="font-bold text-sm">{comment.username}</span>
              <span className="text-xs text-Gray400">
                {" "}
                {timeAgo(comment.posted_at)}
              </span>
            </div>
            <p className="text-sm text-Gray600">{comment.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
