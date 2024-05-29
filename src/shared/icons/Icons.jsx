import React from "react";

function Icons({ icon, href }) {

  return (
    <a href={href}>
      <i className={`fa-brands fa-${icon} white-text`} ></i>
    </a>
  );
}

export default Icons;