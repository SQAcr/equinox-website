import React from "react";
export default function Tabs({ items, active, setActive }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
            active === item
              ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
              : "bg-[#1a1d27] text-gray-400 hover:bg-[#252938] hover:text-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}