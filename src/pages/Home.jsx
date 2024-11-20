import { Hero } from "../components/Hero";
import Separator from "../components/ui/Separator";
import { FaleConosco } from "../components/FaleConosco";
import { QuemSomos } from "../components/QuemSomos";
import { Patrocinadores } from "../components/Patrocinadores";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Patrocinadores />
      <QuemSomos />
      <FaleConosco />
      <Footer />
    </>
  );
}
