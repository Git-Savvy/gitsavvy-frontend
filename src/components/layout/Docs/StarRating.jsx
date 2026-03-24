import { useState } from "react";

export default function StarRating({
  maxStars = 5,
  value = 0,
  onChange,
  size = 24,
}) {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (rating) => {
    if (onChange) onChange(rating);
  };

  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: maxStars }, (_, i) => {
        const rating = i + 1;
        const active = hoverValue ? rating <= hoverValue : rating <= value;

        return (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(rating)}
            onMouseEnter={() => setHoverValue(rating)}
            onMouseLeave={() => setHoverValue(0)}
            className="transition-transform hover:scale-110"
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={active ? "#facc15" : "none"}
              stroke="#facc15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 
                               17 14.14 18.18 21.02 
                               12 17.77 5.82 21.02 
                               7 14.14 2 9.27 
                               8.91 8.26 12 2" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}