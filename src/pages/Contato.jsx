import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import ellipse from "../assets/ellipse.svg";
import { MdPhoneInTalk, MdEmail, MdLocationOn } from "react-icons/md";
import joinha from "../assets/joinha.jpg";

export function Contato() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Obrigado por entrar em contato!");
    event.target.reset();
  };
  return (
    <>
      <Background className="bg-dark-green pb-12">
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
          <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray font-light text-sm tracking-wide text-center max-w-[600px] leading-normal mt-2 mb-12">
            Escolha o plano que melhor atende às suas necessidades. Oferecemos
            consultas gratuitas, assinaturas mensais e soluções personalizadas
            para companhias elétricas.
          </p>
          <div className="flex flex-row gap-12 mb-14 w-full items-center justify-center">
            <div className="border border-[#313131] rounded-lg bg-[#111714] max-w-[350px] w-full p-4">
              <MdPhoneInTalk className="text-5xl text-primary mx-auto" />
              <h3 className="text-white text-xl font-semibold text-center mt-2">
                Fale conosco
              </h3>
              <p className="text-gray text-center mt-2">
                Ligue para nós para obter ajuda.
              </p>
              <h4 className="text-white text-lg font-semibold text-center mt-4">
                +55 11 9999-9999
              </h4>
            </div>

            <div className="border border-[#313131] rounded-lg bg-[#111714] max-w-[350px] w-full p-4">
              <MdEmail className="text-5xl text-primary mx-auto" />
              <h3 className="text-white text-xl font-semibold text-center mt-2">
                Email
              </h3>
              <p className="text-gray text-center mt-2">
                Envie-nos um email para obter ajuda.
              </p>
              <h4 className="text-white text-lg font-semibold text-center mt-4">
                sustergy@contato.com.br
              </h4>
            </div>

            <div className="border border-[#313131] rounded-lg bg-[#111714] max-w-[350px] w-full p-4">
              <MdLocationOn className="text-5xl text-primary mx-auto" />
              <h3 className="text-white text-xl font-semibold text-center mt-2">
                Endereço
              </h3>
              <p className="text-gray text-center mt-2">
                Visite-nos em nosso escritório.
              </p>
              <h4 className="text-white text-lg font-semibold text-center mt-4">
                Rua dos Bobos, nº 0
              </h4>
            </div>
          </div>
          <div className="w-full px-8 flex flex-row justify-between items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-3/6 flex flex-col gap-6"
            >
              <h2 className="text-white text-xl font-semibold">
                Contato rápido
              </h2>
              <input
                type="text"
                placeholder="Nome *"
                required
                className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Assunto *"
                required
                className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Mensagem *"
                required
                className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray h-32 resize-none focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#62E763] to-[#3CC889] text-white px-6 py-3 rounded-3xl mt-4 hover:opacity-90 transition-opacity duration-300"
              >
                Enviar
              </button>
            </form>
            <img
              src={joinha}
              alt="Um homem fazendo joinha com a mão"
              className="h-[450px] rounded-lg"
            />
          </div>
        </Section>
      </Background>
    </>
  );
}
