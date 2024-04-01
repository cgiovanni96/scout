"use client";
import { motion } from "framer-motion";

import { guilds } from "@/src/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  colorEnabled?: boolean;
};

export const Guilds = ({ colorEnabled }: Props) => {
  const router = useRouter();

  const guildOnClick = (linkId: string) => {
    router.push(`/branche/${linkId}`);
  };

  return (
    <motion.section
      className="rounded-t-2xl bg-primary-700 py-8  min-h-60"
      initial={{ y: 100, opacity: 0.8 }}
      whileInView={{ y: -25, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-4/5 flex flex-col mx-auto">
        <div className="flex justify-between items-center text-white">
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-4xl text-center">PERCORSO SCOUT</h1>
            <h2 className="text-center">
              Il percorso scout si articola in tre momenti specifici, coordinati
              e progressivi di educazione.
              <strong> Premi sulle icone per scoprire di più!</strong>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-4 md:gap-0 md:flex-row md:justify-evenly my-8">
          {guilds
            .filter((g) => !g.hide)
            .map((guild) => (
              <div
                key={guild.label}
                className="flex flex-col gap-4 items-center cursor-pointer"
                onClick={() => guildOnClick(guild.linkId)}
              >
                <motion.div
                  className="rounded-full p-16 lg:p-8 bg-primary-900 border-primary-500 border-4 "
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  <div className="relative inline-block w-[125px] h-[125px] lg:w-[100px] lg:h-[100px]">
                    <Image
                      src={guild.image}
                      alt={guild.label}
                      fill
                      className="object-fit"
                    />
                  </div>
                </motion.div>
                <span
                  className="text-primary-900 font-bold text-4xl lg:text-2xl"
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
