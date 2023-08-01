import React from "react";
import "./companyInfo.css";
function CompanyInfo({ data }) {
  const { title, activity,titleClassName,activityClassName} = data[0].headInfo;
  return (
    <div className="headInfo">
      <span className={titleClassName}>{title}</span>
      <span className={activityClassName}>{activity}</span>
    </div>
  );
}

export default CompanyInfo;
