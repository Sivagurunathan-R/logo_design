import React from "react";

const Logo = () => {
  return (
    <>
      <div className="logo_container">
        <div className="border_wrapper">
          <div className="border left"></div>
          <div className="border top"></div>
          <div className="border right"></div>
          <div className="border bottom"></div>
        </div>

        <div className="logo_text">
          <h4 className="primary">HTML <span>&</span> CSS</h4>
          <small>design and build websites</small>
        </div>
      </div>
    </>
  );
};

export default Logo;
