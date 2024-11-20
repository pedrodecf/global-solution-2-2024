import React from "react";

import sap from "../../assets/partners/sap.png";
import formula from "../../assets/partners/formula.png";
import pactoGlobal from "../../assets/partners/pacto-global.png";
import techMahindra from "../../assets/partners/tech-mahindra.png";
import ultracargo from "../../assets/partners/ultracargo.png";
import ultragaz from "../../assets/partners/ultragaz.png";

const logos = [
  // { src: sap, alt: "SAP" },
  { src: formula, alt: "Fórmula" },
  { src: pactoGlobal, alt: "Pacto Global" },
  { src: techMahindra, alt: "Tech Mahindra" },
  { src: ultracargo, alt: "Ultracargo" },
  { src: ultragaz, alt: "Ultragaz" },
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-24 whitespace-nowrap logos group">
      <div className="inline-block animate-slide logos-slide">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-12 mx-10 inline-block invert"
          />
        ))}
      </div>
      <div className="inline-block animate-slide logos-slide">
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo.src}
            alt={logo.alt}
            className="h-12 mx-10 inline-block invert"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
