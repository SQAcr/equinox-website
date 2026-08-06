import React from "react";
import theme from "../theme/theme";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={className}
      style={{
        background: theme.colors.card,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.radius.xl,
        boxShadow: theme.shadow.card,
      }}
    >
      {children}
    </div>
  );
}