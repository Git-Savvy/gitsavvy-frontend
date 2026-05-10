import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { useUserContext } from "../../../hooks/useUserContext";
import { useUpdatePreferences } from "../../../hooks/useUserQuery";
import { useQueryClient } from "@tanstack/react-query";
export default function SelectionCards({
  title,
  description,
  tags,
  activeColor = "blue",
  type,
  user,
}) {
  const colorMap = {
    blue: "bg-Cyan50 border-Teal400 text-Teal400",
    purple: "bg-Purple50 border-Purple400 text-Purple400",
  };

  const queryClient = useQueryClient();

  useEffect(() => {
    if (user) {
      queryClient.invalidateQueries({ queryKey: ["repositories"] });
    }
  }, [user]);

  //useUpdatePreferences hook
  const { mutate, isLoading } = useUpdatePreferences();
  const { setUser } = useUserContext();
  const userpref = user.preferences?.[type] || [];
  // Normal function for handling tag clicks
  function handleTagClick(tagName) {
    // 1. Calculate the new array for that specific type
    const newPref = userpref.includes(tagName)
      ? userpref.filter((t) => t !== tagName)
      : [...userpref, tagName];

    // 2. Build the full updated user object
    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        [type]: newPref, // Dynamically updates either languages or interests
      },
    };

    // Only call mutate if actually there data
    if (updatedUser.preferences) {
      mutate(updatedUser.preferences);
    }

    // 3. Trigger the mutation to sync with Server and Storage
    // ✅ 1. update React state(no need for user to refresh) and sync to localStorage correctly
    setUser(updatedUser);
    //has to try to change in server .. if error show toast a and refetch real valuie from server as they not updated
  }

  return (
    <div className="bg-white border border-Gray200 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
        <h2 className="text-textdark text-xl font-semibold">{title}</h2>
        <span className="text-Slate400 text-base">
          {userpref.length} selected
        </span>
      </div>
      <p className="text-Gray600 text-lg mb-8">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            onClick={() => handleTagClick(tag.name)}
            key={tag.id}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all flex items-center gap-2 ${
              userpref.includes(tag.name)
                ? colorMap[activeColor]
                : "bg-white border-Gray200 text-Gray600 hover:border-Gray400"
            }`}
          >
            {tag.name} {tag.selected && <Check className="w-4 h-4" />}
          </button>
        ))}
      </div>
    </div>
  );
}
