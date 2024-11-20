import React from "react";
import { twMerge } from "tailwind-merge";

function Section({ children, className = "" }) {
  return (
    <section
      className={twMerge(
        "max-w-[1280px] mx-auto px-8 flex flex-col items-center",
        className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
