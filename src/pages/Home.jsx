import { Hero } from "../components/Hero";
import { FaleConosco } from "../components/FaleConosco";
import { QuemSomos } from "../components/QuemSomos";
import { Patrocinadores } from "../components/Patrocinadores";

export function Home() {
  return (
    <>
      <Hero />
      <Patrocinadores />
      <QuemSomos />
      <FaleConosco />
    </>
  );
}
