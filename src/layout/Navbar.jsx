import React from "react";
import Container from "./Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/60 bg-[#0b0c10]/80 backdrop-blur-xl">

      <Container className="flex items-center justify-between h-20">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="Equinox"
            className="w-11 h-11 rounded-xl"
          />

          <div>

            <h1 className="text-white font-black text-xl">
              EQUINOX
            </h1>

            <p className="text-xs text-gray-500">
              Discord Bot
            </p>

          </div>

        </div>

        {/* Links */}

        <nav className="hidden lg:flex gap-10 text-gray-400 font-medium">

          <a
            href="#features"
            className="hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#commands"
            className="hover:text-white transition"
          >
            Commands
          </a>

          <a
            href="#stats"
            className="hover:text-white transition"
          >
            Statistics
          </a>

          <a
            href="#faq"
            className="hover:text-white transition"
          >
            FAQ
          </a>

        </nav>

        <Button href="#">
          Add Bot
        </Button>

      </Container>

    </header>
  );
}