import React, { useEffect, useRef } from "react";
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
  const { setUser } = useUserContext();
  const { mutate, isPending } = useUpdatePreferences();

  // Stores the timeout ID so we can cancel the previous timer
  const timeoutRef = useRef(null);

  // Current preferences for this category (languages or interests)
  const userpref = user?.preferences?.[type] || [];

  // Refetch recommended repositories whenever preferences change
  useEffect(() => {
    if (user?.preferences) {
      queryClient.invalidateQueries({ queryKey: ["repositories"] });
      console.log("Repositories invalidated because preferences changed");
    }
  }, [user?.preferences, queryClient]);

  // Clear any pending timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function handleTagClick(tagName) {
    // Toggle selected tag
    const newPref = userpref.includes(tagName)
      ? userpref.filter((t) => t !== tagName)
      : [...userpref, tagName];

    // Build updated user object
    const updatedUser = {
      ...user,
      preferences: {
        ...user.preferences,
        [type]: newPref,
      },
    };

    // Update UI immediately (optimistic update)
    setUser(updatedUser);

    // Cancel previous pending request
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Send request only after user stops changing preferences for 3 seconds
    timeoutRef.current = setTimeout(() => {
      if (updatedUser.preferences) {
        mutate(updatedUser.preferences);
        console.log("Preferences saved to server");
      }
    }, 3000); // Change to 10000 for 10 seconds if desired
  }

  return (
    <div className="bg-white border border-Gray200 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
        <h2 className="text-textdark text-xl font-semibold">{title}</h2>
        <span className="text-Slate400 text-base">
          {userpref.length} selected
          {isPending && " (Saving...)"}
        </span>
      </div>

      <p className="text-Gray600 text-lg mb-8">{description}</p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            type="button"
            key={tag.id}
            onClick={() => handleTagClick(tag.name)}
            className={`px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all flex items-center gap-2 ${
              userpref.includes(tag.name)
                ? colorMap[activeColor]
                : "bg-white border-Gray200 text-Gray600 hover:border-Gray400"
            }`}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
