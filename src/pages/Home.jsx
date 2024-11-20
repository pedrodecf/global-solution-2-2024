import { Hero } from "../components/Hero";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import sap from "../assets/partners/sap.png";
import formula from "../assets/partners/formula.png";
import pactoGlobal from "../assets/partners/pacto-global.png";
import techMahindra from "../assets/partners/tech-mahindra.png";
import ultracargo from "../assets/partners/ultracargo.png";
import ultragaz from "../assets/partners/ultragaz.png";

export function Home() {
  return (
    <>
      <Hero />
      <Background className="bg-dark-green-2">
        <Section className="bg-white">
          <img src={sap} alt="SAP" className="h-12" />
        </Section>
      </Background>
    </>
  );
}
