"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { MenuIcon } from "@/src/icon";
import { Overlay } from "@/src/components/overlay";

import { NavigationMenu } from "./navigation-menu.component";
import { Agesci } from "@/src/ui/agesci";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <header className="absolute flex justify-between items-center top-10 w-[90%] md:w-4/5 left-1/2 -translate-x-1/2 py-4 px-8 bg-white bg-opacity-80 rounded-lg shadow-md z-10">
          <div></div>

          <nav className="hidden md:flex gap-8">
            <NavigationMenu path={path} filter={true} />
          </nav>

          <MenuIcon
            className="md:hidden cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          />
        </header>
      </motion.div>
      <Overlay
        className="bg-white"
        title="Navigazione"
        open={open}
        onClose={() => {
          console.log("close");
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
