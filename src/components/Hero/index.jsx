import Background from "../ui/Background";
import Section from "../ui/Section";
import ellipse from "../../assets/ellipse.svg";
import circles from "../../assets/circles.png";
import widget1 from "../../assets/widget-1.png";
import widget2 from "../../assets/widget-2.png";
import widget3 from "../../assets/widget-3.png";
import widget4 from "../../assets/widget-4.png";

export function Hero() {
  return (
    <Background className="bg-dark-green">
      <img
        src={ellipse}
        alt="ellipse"
        className="h-[75vh] absolute left-5 top-5 no-drag brightness-110"
      />
      <img
        src={ellipse}
        alt="ellipse"
        className="h-[80vh] absolute right-5 bottom-5 no-drag brightness-110"
      />
      <Section className="relative" haveNav>
        <h1 className="text-white text-center text-6xl font-semibold tracking-wide leading-tight">
          Escolha{" "}
          <span className="bg-gradient-to-r from-[#62E763] to-[#3CC889] inline-block text-transparent bg-clip-text">
            a Melhor Energia
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#62E763] to-[#3CC889] inline-block text-transparent bg-clip-text">
            Para Você
          </span>{" "}
          de Maneira Facilitada
        </h1>
        <p className="text-gray tracking-wide text-center max-w-[800px] leading-normal mt-3">
          No mercado livre de energia, você escolhe! Compare distribuidoras e
          selecione o tipo de energia ideal – eólica, hidrelétrica, solar e
          muito mais. Simples e rápido e ao seu alcance.
        </p>
        <div className="h-96">
          <img
            src={circles}
            alt="circles"
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 no-drag max-h-[300px] z-50"
          />
          <img
            src={widget1}
            alt=""
            className="max-w-[300px] absolute bottom-48 left-32 animate-float-2"
          />
          <img
            src={widget4}
            alt=""
            className="max-w-[150px] absolute bottom-12 left-48 animate-float-3"
          />
          <img
            src={widget2}
            alt=""
            className="max-w-[150px] absolute bottom-52 right-72 animate-float-3"
          />
          <img
            src={widget3}
            alt=""
            className="max-w-[250px] absolute bottom-12 right-28 animate-float-2"
          />
        </div>
      </Section>
    </Background>
  );
}
