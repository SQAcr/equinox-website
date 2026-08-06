import React from "react";
import Card from "./Card";

export default function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <Card className="p-8 text-center hover:border-indigo-500/40">

      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </Card>
  );
}