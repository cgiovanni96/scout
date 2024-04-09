"use client";

import { basicInfo, pages } from "@/src/data";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();

  return (
    <footer
      className={`w-full flex px-4 pb-8 text-white bg-primary-900 ${pathName !== "/" && "pt-8"}`}
    >
      <div className="w-4/5 lg:w-3/4 mx-auto flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold">
            GRUPPO SCOUT <br /> AGESCI TIGULLIO
          </h1>

          <div className="hidden lg:flex gap-6">
            {pages.map((page) => (
              <Link key={page.path} href={page.path} className="font-bold">
                {page.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col gap-1">
            {basicInfo.map((info) => (
              <span key={info}>{info}</span>
            ))}
          </div>

          <div className="flex lg:justify-end gap-2">
            <span>Seguici: </span>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/scout_tigullio1/"
              target="_blank"
            >
              <Instagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.facebook.com/groups/40477455425/"
              target="_blank"
            >
              <Facebook />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
