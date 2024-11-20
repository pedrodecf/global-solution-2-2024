import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function Card({
  plano,
  valor,
  descricao,
  mensal = false,
  textoBtn,
  beneficios,
  beta = false,
  melhorOpcao = false,
  melhorOpcaoTexto = "",
  className = "",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonText = beta && isHovered ? "Em breve" : textoBtn;
  const buttonDisabled = beta && isHovered;
  const cursorClass = buttonDisabled ? "cursor-not-allowed" : "";

  const borderClass = melhorOpcao
    ? "border-2 border-transparent bg-gradient-to-r from-[#4fd74f] to-[#2db578] p-[8px] pt-[36px] rounded-xl relative"
    : "";

  return (
    <div className={twMerge(borderClass, className)}>
      <div
        className={twMerge(
          "flex flex-col items-center gap-4 px-8 py-6 rounded-xl border border-[#313131] bg-[#11171450] text-white w-full max-w-[348px]",
          melhorOpcao ? "bg-[#111714] rounded-lg" : ""
        )}
      >
        {melhorOpcao && (
          <p className="absolute text-xl text-gray-400 font-semibold top-0.5">
            {melhorOpcaoTexto}
          </p>
        )}
        <div className="text-center">
          <p className="text-xl font-semibold">{plano}</p>
          <p className="text-sm text-gray">{descricao}</p>
        </div>
        <h2 className="text-4xl font-bold text-primary">
          {mensal && <span className="text-2xl">R$</span>}
          <span>{valor}</span>
          {mensal && <span className="text-base"> /mês</span>}
        </h2>
        <div className="w-full flex flex-col gap-3">
          {beneficios.map((beneficio, index) => (
            <p key={index} className="text-left flex items-center gap-2">
              <FaCheck className="text-primary" />
              {beneficio}
            </p>
          ))}
        </div>
        <button
          className={`bg-gradient-to-r from-[#62E763] to-[#3CC889]
          [background-size:200%_auto]
          transition-all duration-500
          hover:[background-position:right_center]
          px-6 py-2 rounded-lg w-full text-sm text-black ${cursorClass}`}
          disabled={buttonDisabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
