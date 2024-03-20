"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TEXT = {
  title: "non sai dove fare bivacco?",
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in accumsan augue. Ut finibus cursus orci ut finibus. Aliquam erat volutpat. Donec nisi ipsum, sollicitudin ac venenatis sed, sagittis ac orci. Vestibulum vehicula congue ipsum, sed tincidunt augue interdum sed.",
    "Cras at dolor in urna tristique vestibulum nec eget dui. Sed ac volutpat est, eu tempus tortor. Sed id elit scelerisque est semper facilisis nec in sem.",
  ],
};

export const Services = () => {
  return (
    <motion.section
      className="rounded-t-2xl bg-primary-dark py-8 border-t-8 border-primary-700 min-h-60 text-white"
      initial={{ y: 100, opacity: 0.8 }}
      whileInView={{ y: -20, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-4/5 flex flex-col mx-auto gap-6 pb-4">
        <h1 className="text-center font-bold text-3xl lg:text-5xl">
          {TEXT.title.toUpperCase()}
        </h1>

        <div className="w-full flex flex-col lg:flex-row gap-2">
          <div className="flex-1 flex justify-center relative">
            <Image
              src="/service.png"
              width={637}
              height={323}
              alt="Foto del spazio messo a disposizione"
              className="rounded-lg border-2 border-white"
            />
          </div>

          <div className="flex-1 space-y-2">
            {TEXT.text.map((text) => (
              <p className="text-center lg:w-3/4 lg:text-justify">{text}</p>
            ))}

            <div>
              <a href="/servizi" className="font-bold text-primary-500">
                Clicca qui
              </a>{" "}
              per maggiori informazioni
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
