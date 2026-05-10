import React from "react";

import { Search } from "lucide-react";
export default function SearchSquare({ text, setSearch }) {
  return (
    <div className="relative flex-1 lg:text-xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-Gray400 w-5 h-5" />
      <input
        type="text"
        placeholder={text}
        onChange={(e) => {
          const cleanValue = e.target.value.trim().substring(0, 100); // Limit length
          setSearch(cleanValue);
        }}
        className="w-full placeholder:text-sm  md:placeholder:text-lg pl-10 pr-4 py-2.5 bg-background border border-Gray400 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
      />
    </div>
  );
}
