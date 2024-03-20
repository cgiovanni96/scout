"use client";
import { motion } from "framer-motion";

export const GroupDescription = () => {
  return (
    <motion.section
      className="relative rounded-t-2xl bg-green-50 py-8 min-h-60 border-primary-500 border-t-8 after:block after:h-8 after:p-4 after:bg-primary-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:rounded-t-2xl"
      initial={{ y: 80, opacity: 0.8 }}
      whileInView={{ y: -40, opacity: 1 }}
      viewport={{ once: true }}
    >
      Hello
    </motion.section>
  );
};
