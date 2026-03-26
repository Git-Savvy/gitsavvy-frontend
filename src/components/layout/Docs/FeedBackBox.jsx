import { useState } from "react";
import StarRating from "./StarRating";

export default function FeedbackBox() {
  const [rating, setRating] = useState(0);

  return (
    <div className="p-4 border border-2 border-NavBorder bg-background rounded-lg min-w-fit ml-5">
      <p className="mb-2 font-medium">Rate this documentation:</p>

      <StarRating value={rating} onChange={setRating} />

      <p className="mt-2 text-sm text-gray-500">You rated: {rating}/5</p>
    </div>
  );
}
