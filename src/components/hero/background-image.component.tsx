import Image from "next/image";
import { BackgroundShadow } from "./background-shadow.util";
import heroImage from "./hero.jpg";

export const BackgroundImage = () => (
  <div className="absolute top-0 left-0 bottom-0 right-0 -z-10 pointer-events-none">
    <div className="relative h-full w-full">
      <BackgroundShadow />
      <Image
        src={"/prova_hero2.jpg"}
        alt="Hero image"
        fill={true}
        className="object-cover -z-[12]"
      />
    </div>
  </div>
);
