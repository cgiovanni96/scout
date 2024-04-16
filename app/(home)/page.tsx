import { Hero } from "@/src/components/hero";
import { Guilds } from "@/src/components/guilds";
import { GroupDescription } from "@/src/components/group-description";
import { Footer } from "@/src/components/footer";
import { Services } from "@/src/components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Guilds />
      <Footer />
    </>
  );
}
