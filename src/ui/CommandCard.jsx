import React from "react";

export default function CommandCard({ command }) {
  // إذا كان الـ command عبارة عن كائن يحتوي على name و description
  if (typeof command === "object" && command !== null) {
    return (
      <div className="rounded-2xl border border-gray-800 bg-[#151822] p-6 text-start">
        <h3 className="text-indigo-400 font-mono font-bold text-lg">
          {command.name}
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          {command.description}
        </p>
      </div>
    );
  }

  // إذا كان مجرد نص عادي (للتوافق القديم)
  return (
    <div className="rounded-2xl border border-gray-800 bg-[#151822] p-6 text-start">
      <span className="text-indigo-400 font-mono font-bold text-lg">
        {command}
      </span>
    </div>
  );
}