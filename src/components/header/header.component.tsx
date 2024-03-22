"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { MenuIcon } from "@/src/icon";
import { Overlay } from "@/src/components/overlay";

import { NavigationMenu } from "./navigation-menu.component";
import { Agesci } from "@/src/ui/agesci";

const variants: Variants = {
  initial: { opacity: 0, top: -100 },
  show: {
    opacity: 1,
    top: "2.5rem",
    transition: { duration: 0.5, type: "easeInOut" },
  },
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [headerVariant, setHeaderVariant] = useState<"initial" | "show">(
    "show",
  );

  useEffect(() => {
    open && setOpen(false);
  }, [path]);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    const variant =
      prev && scrollY.getPrevious() && current > prev && current > 120
        ? "initial"
        : "show";
    setHeaderVariant(variant);
  });

  return (
    <>
      <motion.header
        variants={variants}
        initial="initial"
        animate={headerVariant}
        className="fixed flex backdrop-blur-sm justify-between items-center  left-1/2 -translate-x-1/2 w-[90%] md:w-4/5 py-4 px-8 bg-white bg-opacity-80 rounded-lg shadow-md z-10"
      >
        <nav className="hidden md:flex gap-8">
          <NavigationMenu path={path} filter={true} />
        </nav>

        <MenuIcon
          className="md:hidden cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        />
      </motion.header>
      <Overlay
        className="bg-white"
        title="Navigazione"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="flex flex-col gap-4">
          <NavigationMenu path={path} filter={false} />
        </div>
      </Overlay>
    </>
  );
};
