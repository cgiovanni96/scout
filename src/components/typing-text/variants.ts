export const cursorVariants = {
  blinking: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1.5,
      repeat: 2,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};
