import React from "react";

function Icons({ icon, href }) {

  // Arreglar los íconos
  return (
    <a href={href}>
      <i className={`fa-brands fa-${icon} fa-lg white-text icon`} ></i>
    </a>
  );
}

export default Icons;