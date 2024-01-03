import { useLockScroll } from "@/src/hook";
import { CloseIcon } from "@/src/icon/close.icon";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import { PropsWithChildren } from "react";

const variants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.8, x: "100vw" },
};

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  className?: string;
} & PropsWithChildren;

export const Overlay = ({
  open,
  onClose,
  className,
  title,
  children,
}: Props) => {
  useLockScroll({ active: open });

  return (
    <motion.div
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut" }}
      className={clsx(
        "z-20 fixed h-screen max-h-screen top-0 left-0 right-0 p-8 flex flex-col gap-4",
        className,
      )}
    >
      <div className="w-full flex justify-between text-xl">
        <h2 className="font-bold">{title}</h2>
        <CloseIcon onClick={onClose} />
      </div>
      {children}
    </motion.div>
  );
};
