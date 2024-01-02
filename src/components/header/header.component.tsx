"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { pages } from "@/src/data";
import { MenuIcon } from "@/src/icon";

export const Header = () => {
  const path = usePathname();

  const showNavElement = (pagePath: string) => {
    return path !== "/" || (path === "/" && pagePath !== "/");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <header className="absolute flex justify-between items-center top-10 w-4/5 left-1/2 -translate-x-1/2 py-4 px-8 bg-white bg-opacity-80 rounded-lg shadow-md z-10">
        <div>
          <div className="inline-block rounded-full bg-blue-500 p-2" />
        </div>

        <nav className="hidden md:flex gap-8">
          {pages.map((page) => (
            <Fragment key={page.path}>
              {showNavElement(page.path) && (
                <Link href={page.path}>{page.name}</Link>
              )}
            </Fragment>
          ))}
        </nav>

        <MenuIcon
          className="md:hidden cursor-pointer"
          onClick={() => {
            console.log("click");
          }}
        />
      </header>
    </motion.div>
  );
};
