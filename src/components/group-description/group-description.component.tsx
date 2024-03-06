"use client";
import { motion } from "framer-motion";

export const GroupDescription = () => {
  return (
    <motion.section
      className="rounded-t-2xl bg-green-50 py-8 min-h-60 border-primary-500 border-t-8"
      initial={{ y: 80, opacity: 0.8 }}
      whileInView={{ y: -40, opacity: 1 }}
      viewport={{ once: true }}
    >
      Hello
    </motion.section>
  );
};
