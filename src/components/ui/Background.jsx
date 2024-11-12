import React from "react";

function Background({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}

export default Background;
