import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { useParams } from "react-router-dom";
import { useSubmitRating } from "../../../hooks/useRatingQuery"; 

export default function FeedbackBox() {
  const { repoId } = useParams();
  const storageKey = `stars-${repoId}`;
  
  // 1. Initialize local state from LocalStorage
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : 0;
  });

  // 2. Initialize the mutation
  const { mutate } = useSubmitRating(repoId);

  const handleRatingChange = (newRating) => {
    // Update local UI immediately
    setRating(newRating);
    localStorage.setItem(storageKey, newRating.toString());

    // Sync with backend
    if (repoId && newRating > 0) {
      mutate(newRating);
    }
  };

  return (
    <div className="p-4 border-2 border-NavBorder bg-background rounded-lg min-w-fit h-fit ml-5 shadow-sm mt-4 md:mt-0">
      <p className="mb-2 font-medium text-textdark">Rate this documentation:</p>

      <StarRating value={rating} onChange={handleRatingChange} />

      <p className="mt-2 text-xs text-Gray400 italic">
        {rating > 0 ? `You rated: ${rating}/5` : "Click a star to rate"}
      </p>
    </div>
  );
}