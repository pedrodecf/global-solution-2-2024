import { useState } from "react";

export function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona o mercado livre de energia?",
      answer:
        "No mercado livre de energia, os consumidores podem escolher seus fornecedores de energia, negociando preços e contratos de acordo com suas necessidades.",
    },
    {
      question: "Quais são os benefícios de migrar para o mercado livre?",
      answer:
        "Os benefícios incluem maior competitividade nos preços, possibilidade de negociar condições contratuais e optar por fontes de energia renováveis.",
    },
    {
      question: "Quem pode aderir ao mercado livre de energia?",
      answer:
        "Empresas e consumidores com demanda contratada acima de um determinado limite podem aderir ao mercado livre. Há propostas para ampliar esse acesso no futuro.",
    },
    {
      question: "Como a Sustergy pode ajudar nesse processo?",
      answer:
        "A Sustergy facilita a comparação entre fornecedores e tipos de energia, auxiliando na escolha da melhor opção para o seu perfil.",
    },
  ];

  return (
    <div className="w-full md:w-1/2">
      <h3 className="text-white text-xl mb-4 font-bold text-center">
        Perguntas Frequentes
      </h3>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray py-4">
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full text-left text-white font-medium focus:outline-none flex items-center justify-between"
          >
            {faq.question}
            <span
              className={`text-sm transform transition-transform duration-300 ${
                activeQuestion === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeQuestion === index ? "max-h-40 mt-2" : "max-h-0"
            }`}
          >
            <p className="text-gray">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
