import React from "react";

function Section({ children, className = "" }) {
  return (
    <section
      className={`container mx-auto px-8 min-h-screen flex flex-col items-center ${className}`}
      style={{ height: "100vh" }}
    >
      {children}
    </section>
  );
}

export default Section;
