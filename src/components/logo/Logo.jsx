import React from "react";
import "./logo.css";

function Logo({ data,logoDesigin }) {
  const logoUrl=data[0].logo.url
  return (
    <div className="logo">
      <div>
        <img className={logoDesigin} src={logoUrl} />
      </div>
    </div>
  );
}

export default Logo;
