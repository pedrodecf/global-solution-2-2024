import Background from "../ui/Background";
import { Faq } from "../ui/Faq";
import Section from "../ui/Section";
import Separator from "../ui/Separator";

export function FaleConosco() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Obrigado por entrar em contato!");
    event.target.reset();
  };

  return (
    <Background className="bg-dark-green">
      <Section className="pt-12 pb-24 flex flex-col items-center">
        <Separator className="my-12" />
        <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal ">
          Fale <span className="text-primary">Conosco</span>
        </h2>
        <p className="text-gray font-light text-sm tracking-wide text-center max-w-[500px] leading-normal mt-2 mb-12">
          Tem dúvidas ou precisa de ajuda? Fale conosco! Estamos prontos para
          ajudá-lo a encontrar a melhor opção de energia para você.
        </p>
        <div className="flex flex-col md:flex-row gap-24 w-full justify-center items-start">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/5 flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Nome"
              required
              className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="px-4 py-2 rounded bg-dark-green-2 text-white border border-gray focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Assunto"
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
          <Faq />
        </div>
      </Section>
    </Background>
  );
}
