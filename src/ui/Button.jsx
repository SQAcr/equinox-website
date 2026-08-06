import React from "react";
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30",

    secondary:
      "bg-[#181b25] border border-gray-700 hover:border-indigo-500 hover:bg-[#1d2230] text-gray-100",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-2xl
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}