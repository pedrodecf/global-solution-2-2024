import LogoSlider from "../Slider";
import Background from "../ui/Background";
import Section from "../ui/Section";

export function Patrocinadores() {
  return (
    <Background className="bg-gradient-to-b from-[#030906] to-[#03110C]">
      <Section className="relative px-0">
        <div className="z-20 absolute w-full flex flex-row items-center px-8 mt-8 gap-2">
          <h2 className=" text-gray bg-transparent">
            Em parceria com as mais diversas empresas
          </h2>
          <div className="w-[48px] border-[0.5px] border-gray"></div>
        </div>
      </Section>
      <LogoSlider />
    </Background>
  );
}
