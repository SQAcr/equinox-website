import React from "react";
import StatCard from "../ui/StatCard";

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black text-white">
            Equinox بالأرقام
          </h2>

          <p className="text-gray-400 mt-4">
            أداء واستقرار على أعلى مستوى.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <StatCard
            icon="🤖"
            value="50+"
            title="Commands"
          />

          <StatCard
            icon="⚡"
            value="99.9%"
            title="Uptime"
          />

          <StatCard
            icon="🛡️"
            value="24/7"
            title="Protection"
          />

          <StatCard
            icon="🌍"
            value="1000+"
            title="Servers"
          />

        </div>

      </div>

    </section>
  );
}