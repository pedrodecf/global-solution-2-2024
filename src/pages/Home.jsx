import { Hero } from "../components/Hero";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import LogoSlider from "../components/Slider";
import Separator from "../components/ui/Separator";
import { User } from "../components/ui/User";

export function Home() {
  return (
    <>
      <Hero />
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
      <Separator />

      <Background className="bg-dark-green">
        <Section className="py-8">
          <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="text-gray font-light text-sm tracking-wide text-center max-w-[400px] leading-normal mt-2">
            Somos uma plataforma inovadora dedicada a simplificar o acesso ao
            mercado livre de energia.
          </p>
          <div className="flex flex-row items-center gap-12 mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ruH5agMbmcA?si=BjEEEa2ksN8iPLBB"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col gap-8">
              <User
                img="https://github.com/pedrodecf.png"
                nome="Pedro de Freitas"
                rm="555907"
              />

              <User
                img="https://github.com/AntonioSchappo.png"
                nome="Antônio Schappo"
                rm="556429"
              />
            </div>
          </div>
        </Section>
      </Background>
    </>
  );
}
