import React from "react";

function Background({ children, className = "" }) {
  return <section className={`min-h-screen ${className}`}>{children}</section>;
}

export default Background;
