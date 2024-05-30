import React from "react";

function Icons({ src, href }) {

  // Arreglar los íconos
  return (
    <a href={href}>
      <img src={src} alt="icons" />
    </a>
  );
}

export default Icons;