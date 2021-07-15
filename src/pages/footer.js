import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
      <div
      style={{
        clear: "both",
        position: "absolute",
        bottom: "-55px",
        width:"100%",
        height: "60px%",
        padding:"5px",
        backgroundColor: "#efefef",
        zIndex: "30",
      }}
      >
        <p className="footerP">Le relais du temple — 2021. Appelez-nous: <span className="contactInfo">04 75 53 35 43</span> </p>
        <p className="footerP">Tout droit réservé. Webmaster: <span className="contactInfo">arthur.stainmesse@gmail.com</span></p>
      </div>
    );
  };
    
  export default Footer;