import CommentBox from "../common/CommentBox";

export default function Comments({ comments }) {
  return (
    <section className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-4 p-4  border-2 border-Gray200 rounded-xl bg-white "
        >
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.user}`}
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div>
            <div className="flex gap-2 items-center mb-1">
              <span className="font-bold text-sm">{comment.user}</span>
              <span className="text-xs text-Gray400">{comment.time}</span>
            </div>
            <p className="text-sm text-Gray600">{comment.text}</p>
          </div>
        </div>
      ))}
      <CommentBox />
    </section>
  );
}
