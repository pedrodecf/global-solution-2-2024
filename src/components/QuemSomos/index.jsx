import Background from "../ui/Background";
import Section from "../ui/Section";
import Separator from "../ui/Separator";
import { User } from "../ui/User";
import ellipse from "../../assets/ellipse.svg";

export function QuemSomos() {
  return (
    <Background className="bg-dark-green">
      <img
        src={ellipse}
        alt="ellipse"
        className="h-[75vh] absolute left-5 top-5 no-drag brightness-110 z-30"
      />
      <Section className="relative">
        <Separator className="mb-12" />
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
            src="https://www.youtube.com/embed/YFkWzwxe4LM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex flex-col gap-8">
            <h2 className="text-white text-center font-extrabold ">GRUPO: Gepetto Reborn 🔋</h2>
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
  );
}
