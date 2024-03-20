"use client";
import { motion } from "framer-motion";

import { TypingText } from "@/src/components/typing-text";
import Link from "next/link";

export const Tagline = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white font-black text-4xl md:text-6xl text-center lg:text-left"
      >
        GRUPPO SCOUT <br /> AGESCI TIGULLIO
      </motion.h1>
      <TypingText
        text="Il più antico (e unico!) gruppo scout del Tigullio"
        className="text-white mt-4 drop-shadow-lg text-xl md:text-2xl text-center lg:text-left"
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center lg:justify-start"
      >
        <Link
          href="/iscrizioni"
          className="inline-block mt-4 px-8 py-2 bg-primary-500 text-primary-900 text-sm font-bold rounded-md"
        >
          ISCRIZIONI
        </Link>
      </motion.div>
    </>
  );
};
