"use client";
import { motion } from "framer-motion";

import { guilds } from "@/src/data";
import Image from "next/image";

type Props = {
  colorEnabled?: boolean;
};

export const Guilds = ({ colorEnabled }: Props) => {
  return (
    <motion.section
      className="rounded-t-2xl bg-primary-700 py-8  min-h-60"
      initial={{ y: 100, opacity: 0.8 }}
      whileInView={{ y: -20, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-4/5 flex flex-col mx-auto">
        <div className="flex justify-between items-center text-white">
          <div className="flex flex-col ">
            <h1 className="font-bold text-4xl">PERCORSO SCOUT</h1>
            <h2>Breve descrizione sul percorso scout TBD</h2>
          </div>

          <span className="hidden md:inline-block leading-none">
            Premi sulle icone <br /> per scoprire di più!
          </span>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between my-8">
          {guilds.map((guild) => (
            <div
              key={guild.label}
              className="flex md:flex-col gap-4 items-center"
            >
              <div className="rounded-full p-8 bg-primary-900 border-primary-500 border-4 ">
                <Image
                  src={guild.image}
                  alt={guild.label}
                  width={100}
                  height={100}
                />
              </div>

              <span
                className="text-primary-900 font-bold text-2xl"
                style={{ color: colorEnabled ? guild.color : "" }}
              >
                {guild.label}
              </span>
            </div>
          ))}
        </div>
      </div>{" "}
    </motion.section>
  );
};
