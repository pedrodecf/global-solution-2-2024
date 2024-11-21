import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import ellipse from "../assets/ellipse.svg";
import mercadoLivreImg from "../assets/mercado-livre-energia.png";
import appPreview from "../assets/app-preview.png";

export function ComoFunciona() {
  return (
    <>
      <Background className="bg-gradient-to-b from-[#03110C] to-[#030906]">
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
        <Section haveNav className="relative">
          <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal ">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-gray font-light text-sm tracking-wide text-center max-w-[700px] leading-normal mt-2 mb-12">
            No Mercado Livre de Energia, você escolhe seu fornecedor ideal.
            Basta inserir seu CEP, comparar as opções disponíveis e selecionar o
            melhor plano para suas necessidades.
          </p>
        </Section>

        <Section className="py-6">
          <h3 className="text-white text-3xl font-semibold text-center mb-8">
            O que é o Mercado Livre de Energia?
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <img
              src={mercadoLivreImg}
              alt="Mercado Livre de Energia"
              className="h-full max-h-[250px] w-auto"
            />
            <p className="text-gray font-light text-sm tracking-wide leading-normal md:w-1/2">
              O Mercado Livre de Energia é um ambiente de negociação onde
              consumidores podem escolher seus fornecedores de energia,
              negociando preços e condições que melhor atendam às suas
              necessidades. Isso promove a concorrência e possibilita economia e
              flexibilidade para os consumidores.
            </p>
          </div>
        </Section>
      </Background>
      <Background className="bg-gradient-to-b from-[#030906] to-[#03110C]">
        <Section className="py-6">
          <h3 className="text-white text-3xl font-semibold text-center mb-8">
            Como a <span className="text-primary">Sustergy</span> ajuda você
          </h3>
          <p className="text-gray font-light text-sm tracking-wide text-center max-w-[800px] mx-auto mb-12">
            A Sustergy simplifica todo o processo de escolha, permitindo que
            você compare distribuidores, tipos de energia e preços em um único
            lugar. Nossa plataforma intuitiva facilita a tomada de decisão,
            proporcionando economia e sustentabilidade.
          </p>
        </Section>

        <Section className="pt-6">
          <h3 className="text-white text-3xl font-semibold text-center mb-8">
            Controle sua energia com <span className="text-primary">IA</span>
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray font-light text-sm tracking-wide leading-normal mb-6">
                Nosso aplicativo utiliza Inteligência Artificial para monitorar
                e otimizar o consumo de energia em sua casa. Receba dicas
                personalizadas, alertas sobre desperdícios e acompanhe seu
                consumo em tempo real, diretamente no seu smartphone.
              </p>
              <ul className="text-gray font-light text-sm tracking-wide leading-normal list-disc list-inside">
                <li>Monitoramento em tempo real do consumo</li>
                <li>Dicas personalizadas para economizar energia</li>
                <li>Alertas sobre desperdício</li>
                <li>Controle total na palma da mão</li>
              </ul>
            </div>
            <img
              src={appPreview}
              alt="Prévia do Aplicativo"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
        </Section>
      </Background>
    </>
  );
}
