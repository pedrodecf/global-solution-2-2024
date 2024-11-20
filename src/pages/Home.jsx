import { Hero } from "../components/Hero";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import LogoSlider from "../components/Slider";

export function Home() {
  return (
    <>
      <Hero />
      <Background className="bg-black">
        <Section className="bg-dark-green px-0 relative">
          <div className="z-20 absolute w-full flex flex-row items-center px-8 mt-6 gap-2">
            <h2 className=" text-gray bg-transparent text-sm">
              Em parceria com as mais diversas empresas
            </h2>
            <div className="w-[48px] border-[0.5px] border-gray"></div>
          </div>
          <LogoSlider />
        </Section>
      </Background>
    </>
  );
}
