import React from "react";

import sap from "../../assets/partners/sap.png";
import formula from "../../assets/partners/formula.png";
import pactoGlobal from "../../assets/partners/pacto-global.png";
import techMahindra from "../../assets/partners/tech-mahindra.png";
import ultracargo from "../../assets/partners/ultracargo.png";
import ultragaz from "../../assets/partners/ultragaz.png";
import fiap from "../../assets/partners/fiap.png";

const logos = [
  { src: formula, alt: "Fórmula" },
  { src: pactoGlobal, alt: "Pacto Global" },
  { src: sap, alt: "SAP" },
  { src: techMahindra, alt: "Tech Mahindra" },
  { src: ultracargo, alt: "Ultracargo" },
  { src: fiap, alt: "FIAP" },
  { src: ultragaz, alt: "Ultragaz" },
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden pt-36 pb-28 whitespace-nowrap">
      <div className="inline-block animate-slide logos-slide">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-auto max-w-[150px] mx-10 inline-block invert"
          />
        ))}
      </div>
      <div className="inline-block animate-slide logos-slide">
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo.src}
            alt={logo.alt}
            className="h-auto max-w-[150px] mx-10 inline-block invert"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
