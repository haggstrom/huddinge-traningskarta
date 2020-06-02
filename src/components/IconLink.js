import React from "react";

const IconLink = ({ icon, link, linkTitle }) => {
  return (
    <a href={link} title={linkTitle} rel="noopener noreferrer" target="_blank">
      {icon}
    </a>
  );
};

export default IconLink;
