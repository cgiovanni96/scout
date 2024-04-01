"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TEXT = {
  title: "non sai dove fare bivacco?",
  text: [
    "Presso la Parrocchia di Santo Stefano, situata a Lavagna, abbiamo la possibilta’ di ospitare gruppi Scout provenienti da tutta Italia.",
    "Nel terreno di circa tot mq c'è la possibilità di montare le tende, accendere il fuoco (solo all’ interno del braciere e solo se non vi sono divieti in atto emanati dalla Protezione Civile), avere l’accesso all’acqua potabile.",
    "Inoltre è disponibile l’utilizzo del salone e della cucina.",
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
              <Link href="/servizi" className="font-bold text-primary-500">
                Clicca qui
              </Link>{" "}
              per maggiori informazioni
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
