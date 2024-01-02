import Link from "next/link";
import { AnimatedText } from "../animated-text";
import { BackgroundImage } from "./background-image.component";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center relative">
      <BackgroundImage />
      <div className="w-4/5 mx-auto">
        <h1 className="text-white font-black text-3xl md:text-6xl">
          GRUPPO SCOUT <br /> AGESCI TIGULLIO
        </h1>
        <AnimatedText
          text="Il più antico gruppo scout del Tigullio"
          className="text-white mt-4 drop-shadow-lg text-xl md:text-2xl"
        />
        <div>
          <Link
            href="/iscrizioni"
            className="inline-block mt-4 px-8 py-2 bg-primary-500 text-primary-900 text-sm font-bold rounded-md"
          >
            ISCRIZIONI
          </Link>
        </div>
      </div>
    </section>
  );
};
