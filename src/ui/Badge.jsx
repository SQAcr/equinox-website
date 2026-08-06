import React from "react";
export default function Badge({ children }) {
  return (
    <span className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      border
      border-indigo-500/30
      bg-indigo-500/10
      text-indigo-300
      text-sm
      font-semibold
      backdrop-blur-md
      shadow-lg
      shadow-indigo-500/10
    ">
      {children}
    </span>
  );
}