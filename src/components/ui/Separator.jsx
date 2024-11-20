import React from "react";
import { twMerge } from "tailwind-merge";

function Separator({ className = "" }) {
  return (
    <div
      className={twMerge("w-full h-[0.5px] bg-[#aeafae] opacity-95", className)}
    />
  );
}

export default Separator;
