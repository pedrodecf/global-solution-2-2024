import React from "react";
import { twMerge } from "tailwind-merge";

function Section({ children, className = "", haveNav = false }) {
  return (
    <section
      className={twMerge(
        "max-w-[1280px] mx-auto px-8 flex flex-col items-center",
        haveNav ? "pt-24" : "",
        className
      )}
    >
      {children}
    </section>
  );
}

export default Section;
