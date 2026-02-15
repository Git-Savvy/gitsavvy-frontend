import { NavItem } from "./NavItem";
import NoDataMessage from "../../messages/NoDataMessage";
import SkeletonCard from "../../messages/SkeletonCard";
import ErrorMessage from "../../messages/ErrorMessage";

export default function DocumentationSidebar({
  data,
  activeSlug,
  onSelect,
  isPending,
  error,
}) {
  if (isPending)
    return (
      <SkeletonCard
        containerStyle={
          "w-full md:w-95 h-[450px] "
        }
      />
    );
  if (error)
    return (
      <ErrorMessage
        message={error.message}
        containerStyle={"w-full h-[450px]"}
      />
    );
  // Ensure we are checking the array, not the parent object
  if (!data || data.length === 0)
    return (
      <NoDataMessage
        text="No documentation found for this repository."
        containerStyle={"w-full h-[450px] mb-4"}
      />
    );

  return (
    <aside className="w-full md:w-72 bg-white border-2 border-Gray200 rounded-2xl p-6 shadow-sm overflow-y-auto max-h-screen">
      <h2 className="text-lg font-bold text-textdark mb-6">Documentation</h2>

      <nav className="space-y-1">
        {data.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            activeSlug={activeSlug}
            onSelect={onSelect}
          />
        ))}
      </nav>
    </aside>
  );
}
