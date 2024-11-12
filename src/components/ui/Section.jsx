import React from "react";

function Section({ children, className = "" }) {
  return (
    <section
      className={`max-w-[1280px] mx-auto px-8 flex flex-col items-center ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
