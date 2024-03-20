"use client";

import { basicInfo, pages } from "@/src/data";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full flex px-4 pb-8 text-white bg-primary-900">
      <div className="w-3/4 mx-auto flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold">
            GRUPPO SCOUT <br /> AGESCI TIGULLIO
          </h1>

          <div className="hidden lg:flex gap-6">
            {pages.map((page) => (
              <Link key={page.path} href={page.path}>
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
          </div>
        </div>
      </div>
    </footer>
  );
};
