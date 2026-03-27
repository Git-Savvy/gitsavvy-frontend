import { useState,useEffect } from "react";
import StarRating from "./StarRating";
import { useParams } from "react-router-dom"; //

export default function FeedbackBox() {
  const { repoId } = useParams();
  // 1. Initialize state from LocalStorage or default to 0
  const storageKey = `stars-${repoId}`;
  const [rating, setRating] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved, 10) : 0;
  });

  // 2. Update LocalStorage whenever the value changes
  useEffect(() => {
    if (repoId) {
      localStorage.setItem(storageKey, rating.toString());
    }
  }, [rating, storageKey]);


  return (
    <div className="p-4 border border-2 border-NavBorder bg-background rounded-lg min-w-fit ml-5">
      <p className="mb-2 font-medium">Rate this documentation:</p>

      <StarRating value={rating} onChange={setRating} />

      <p className="mt-2 text-sm text-gray-500">You rated: {rating}/5</p>
    </div>
  );
}
