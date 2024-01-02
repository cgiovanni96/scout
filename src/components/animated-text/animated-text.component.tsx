"use client";
import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

import { BlinkingCursor } from "./blinking-cursor.component";

type Props = {
  text: string;
  className?: string;
};

export const AnimatedText = ({ text, className }: Props) => {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, (latest) => Math.round(latest));
  const animatedText = useTransform(roundedValue, (latest) =>
    text.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className={className}>
      <motion.span>{animatedText}</motion.span>
      <BlinkingCursor />
    </span>
  );
};
