"use client";

import { Agesci } from "@/src/ui/agesci";
import { BackgroundImage } from "./background-image.component";
import { Tagline } from "./tagline.component";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center relative">
      <BackgroundImage />
      <div className="w-[90%] md:w-4/5 mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center lg:justify-start"
        >
          <Agesci
            primary={"#FFF"}
            secondary="#EB0000"
            className="w-[200] h-[200px] lg:w-[240px] lg:h-[240px] "
          />
        </motion.div>
        <Tagline />
      </div>
    </section>
  );
};
