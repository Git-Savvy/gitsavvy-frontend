import ReactMarkdown from "react-markdown";
export default function DescriptionIssue({ body }) {
  return (
    <section className="space-y-6 border-2 border-Gray200 rounded-xl bg-white p-8 lg:shadow-sm mb-5">
      <div>
        <h4 className="font-bold text-textdark mb-2">Issue Description</h4>
      </div>
      <div
        className="prose text-Gray600 text-[15px] md:text-lg leading-relaxed max-w-5xl h-2xl 
          [&_>_p]:flex-wrap 
          [&_>_p]:gap-2 
          [&_strong]:text-textdark [&_h2]:text-NavBorder/70
          [&_h3]:text-NavBorder/50 [&_h4]:text-NavBorder/40 [&_code]:text-indigo-300 
          [&_pre]:bg-zinc-900 [&_a]:text-Indigo300  bg-white"
      >
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </section>
  );
}
