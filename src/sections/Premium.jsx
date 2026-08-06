import React from "react";
import Button from "../ui/Button";

export default function Premium() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-6xl mx-auto rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-16 text-center">

        <h2 className="text-5xl font-black text-white">
          Premium Experience
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Unlock powerful features, faster support,
          and exclusive tools for your Discord server.
        </p>

        <div className="mt-10">
          <Button href="#">
            Coming Soon
          </Button>
        </div>

      </div>

    </section>
  );
}