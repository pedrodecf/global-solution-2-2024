import { Hero } from "../components/Hero";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import LogoSlider from "../components/Slider";

export function Home() {
  return (
    <>
      <Hero />
      <Background className="bg-black">
        <Section className="bg-dark-green px-0  ">
          <LogoSlider />
        </Section>
      </Background>
    </>
  );
}
