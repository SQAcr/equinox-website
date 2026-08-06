import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}

        <div>

          <Badge>
            ✨ The Ultimate Discord Management Bot
          </Badge>

          <h1 className="mt-6 text-5xl lg:text-7xl font-black leading-tight text-white">

            Build your
            <br />

            <span className="text-indigo-400">
              Discord Community
            </span>

            <br />

            with Equinox

          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-8">

            Powerful moderation, economy, games,
            automatic replies, Islamic features,
            dashboards and much more in one bot.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Button href="#">
              Add To Discord
            </Button>

            <Button
              href="#commands"
              variant="secondary"
            >
              View Commands
            </Button>

          </div>

        </div>

        {/* Image */}

        <div className="flex justify-center">

          <img
            src="/banner.png"
            alt="Equinox Dashboard"
            className="w-full max-w-2xl rounded-3xl border border-gray-800 shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}