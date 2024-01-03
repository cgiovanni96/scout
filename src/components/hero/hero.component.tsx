import { BackgroundImage } from "./background-image.component";
import { Tagline } from "./tagline.component";

export const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center relative">
      <BackgroundImage />
      <div className="w-[90%] md:w-4/5 mx-auto">
        <Tagline />
      </div>
    </section>
  );
};
