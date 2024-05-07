"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TEXT = {
  title: "IL “NOSTRO” TERRENO A TUA DISPOSIZIONE",
  text: [
    "Non sai dove fare uscita con il Branco?",
    "Vorresti un posto dove poter cucinare e dormire in tenda di Squadriglia o ancora meglio di Reparto?",
    "Vieni da fuori regione e vorresti fare “un campo vicino al mare”?",
    "Allora abbiamo la soluzione per te!",
  ],
};

export const Services = () => {
  return (
    <motion.section
      className="rounded-t-2xl service-bg py-8 border-t-8 border-primary-700 min-h-60 text-white"
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

          <div className="flex-1">
            {TEXT.text.map((text, idx) => (
              <p
                key={idx}
                className="mb-2 text-center lg:w-3/4 lg:text-justify lg:text-lg"
              >
                {text}
              </p>
            ))}

            <div className="mt-8">
              <Link href="/servizi" className="font-bold text-primary-500">
                Clicca qui
              </Link>{" "}
              per maggiori informazioni sulla disponibilità del luogo.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
