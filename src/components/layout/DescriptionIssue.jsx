import ReactMarkdown from "react-markdown";
import SkeletonCard from "../messages/SkeletonCard";
import ErrorMessage from "../messages/ErrorMessage";
import NoDataMessage from "../messages/NoDataMessage";
export default function DescriptionIssue({ body }) {
  if (!body)
    return (
      <NoDataMessage
        containerStyle="my-15"
        text="No description found."
      />
    );

  return (
    <section className="space-y-6 border-2 border-Gray200 rounded-xl bg-white p-8 lg:shadow-sm mb-5">
      <div
        className="prose max-w-none text-text-secondary leading-relaxed
        [&>p]:flex-wrap 
        [&>p]:gap-2 
        [&>img]:block [&>img]:mx-auto [&>img]:!float-none
        [&_p_img]:max-w-[200px]
        [&_img]:bg-gray-200
        [&_img]:inline
        [&_>_img]:bg-gray-900
        [&_p_img]:p-2
        [&_strong]:text-textdark [&_h1]:text-NavBorder/70
        [&_h2]:text-NavBorder/70 [&_h3]:text-NavBorder/50 [&_h4]:text-NavBorder/40
        [&_code]:text-indigo-300 [&_pre]:bg-zinc-900 [&_a]:text-Indigo300 bg-white"
      >
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </section>
  );
}
