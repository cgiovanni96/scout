"use client";
import { motion } from "framer-motion";
import { cursorVariants } from "./variants";

export const BlinkingCursor = () => (
  <motion.div
    variants={cursorVariants}
    animate="blinking"
    className="inline-block ml-1 h-6 w-[1px] translate-y-1 bg-white "
  />
);
