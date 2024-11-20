import Background from "../components/ui/Background";
import { Card } from "../components/ui/Card";
import Section from "../components/ui/Section";

export function Preco() {
  const planos = [
    {
      plano: "Assinantes",
      valor: "14,90",
      descricao:
        "Assine e gerencie seu consumo de energia através do nosso app",
      mensal: true,
      textoBtn: "Contratar",
      beneficios: [
        "Acesso total ao aplicativo",
        "Monitore seu consumo em detalhes",
        "Dicas para economizar energia",
      ],
      beta: true,
    },
    {
      plano: "Consulta Gratuita",
      valor: "Grátis",
      descricao:
        "Consulta gratuita, descubra as melhores opções de energia na sua região",
      mensal: false,
      textoBtn: "Consultar",
      beneficios: [
        "Acesse empresas da sua área",
        "Compare opções de energia",
        "Serviço gratuito e sem compromisso",
      ],
      beta: false,
      melhorOpcao: true,
      melhorOpcaoTexto: "POR TEMPO LIMITADO!",
    },
    {
      plano: "Empresas",
      valor: "Negociar",
      descricao:
        "Parceria para companhias de energia. Entre em contato conosco",
      mensal: false,
      textoBtn: "Entre em contato",
      beneficios: [
        "Divulgue seus serviços na plataforma",
        "Alcance novos clientes",
        "Condições especiais de parceria",
      ],
      beta: true,
    },
  ];

  return (
    <>
      <Background className="bg-dark-green h-screen min-h-screen">
        <Section haveNav>
          <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal">
            Nossos <span className="text-primary">Preços</span>
          </h2>
          <p className="text-gray font-light text-sm tracking-wide text-center max-w-[600px] leading-normal mt-2 mb-12">
            Escolha o plano que melhor atende às suas necessidades. Oferecemos
            consultas gratuitas, assinaturas mensais e soluções personalizadas
            para companhias elétricas.
          </p>
          <div className="flex flex-row items-center gap-12">
            {planos.map((plano, index) => (
              <Card key={index} {...plano} />
            ))}
          </div>
        </Section>
      </Background>
    </>
  );
}
