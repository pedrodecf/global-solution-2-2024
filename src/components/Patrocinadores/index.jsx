import LogoSlider from "../Slider";
import Background from "../ui/Background";
import Section from "../ui/Section";

export function Patrocinadores() {
  return (
    <Background className="bg-black ">
      <Section className="bg-dark-green relative px-0">
        <div className="z-20 absolute w-full flex flex-row items-center px-8 mt-6 gap-2">
          <h2 className=" text-gray bg-transparent text-sm">
            Em parceria com as mais diversas empresas
          </h2>
          <div className="w-[48px] border-[0.5px] border-gray"></div>
        </div>
        <LogoSlider />
      </Section>
    </Background>
  );
}
