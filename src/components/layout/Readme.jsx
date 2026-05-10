import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Laptop, CircleCheckBig } from "lucide-react";
import { useReadmeByRepoId } from "../../hooks/useReadmeQuery";
import NoDataMessage from "../messages/NoDataMessage";
import SkeletonCard from "../messages/SkeletonCard";
import ErrorMessage from "../messages/ErrorMessage";
export default function Readme({ repoId }) {
  const { data: readme, isPending, error } = useReadmeByRepoId(repoId);
  if (isPending) return <SkeletonCard containerStyle={"h-[500px]"} />;
  if (error)
    return (
      <ErrorMessage
        containerStyle="h-[500px]"
        message={error.message}
      ></ErrorMessage>
    );
  if (!readme)
    return (
      <NoDataMessage
        containerStyle="h-[500px]"
        text="No readme file found for this repository."
      />
    );
  else
    return (
      <div className="border-2 border-Gray200 rounded-xl bg-white p-8 lg:shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-NavBorder">
            <Laptop className="text-NavBorder" />
          </div>
          <h2 className="text-lg font-semibold">Project Overview</h2>
        </div>

        {/* README */}
        <div
          className="
        prose break-words max-w-none text-text-secondary leading-relaxed
        [&>p]:flex-wrap 
        [&>p]:gap-2 
        [&>hr]:border-NavBorder
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
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{readme}</ReactMarkdown>
        </div>
      </div>
    );
}
