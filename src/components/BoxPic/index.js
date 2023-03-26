import React from "react";


function BoxPic({pic, href, labelText}) {

  return (
    <div className="Header">
      <a href={href} target="blank">
        <img
          className="BoxPic"
          src={pic}
          alt="Profile Pic"
        />
      </a>
    </div>
  );
}

export default BoxPic;
