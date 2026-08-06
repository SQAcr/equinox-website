import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">

      <Container className="py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-white text-xl font-bold">
              Equinox
            </h2>

            <p className="text-gray-500 mt-2">
               Discord Management Bot
            </p>

          </div>

          <div className="flex gap-8 text-gray-400">

            <a
              href="#features"
              className="hover:text-white"
            >
              Features
            </a>

            <a
              href="#commands"
              className="hover:text-white"
            >
              Commands
            </a>

            <a
              href="#stats"
              className="hover:text-white"
            >
              Stats
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} Equinox.
          All rights reserved.

        </div>

      </Container>

    </footer>
  );
}