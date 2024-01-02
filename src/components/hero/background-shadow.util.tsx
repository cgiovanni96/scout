"use client";
import { motion } from "framer-motion";

export const BackgroundShadow = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.5 }}
      className="absolute top-0 left-0 right-0 bottom-0 bg-black -z-[11]"
    />
  );
};
