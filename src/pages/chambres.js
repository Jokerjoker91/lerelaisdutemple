import React from 'react';
import CompLoc from "../components/comploc"

import "./chambres.css"

const Chambres = () => {
    return (
      <div
        style={{
          height: "600px",
          width: "100vw",
          display: "block",
          position: "relative",
          background: "linear-gradient(0deg, rgba(254,198,124,1) 0%, rgba(255,255,255,0.2) 35%, rgba(124,198,254,0.5) 100%)",
          zIndex:"0"

        }}
      >
        <div style = {{
          backgroundImage: "url('./img/vue-1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "absolute",
          zIndex: "-1",
          top: "0",
          left: "0",
          bottom: "-600px",
          right: "0",
          opacity: "0.5",
        }}></div>
        <h1 className="titre">Nos hébergements à louer</h1>
        <CompLoc num="1" name="Le gîte" type="gite"/>
        <CompLoc num="2" name="Les châlets" type="chalet"/>
      </div>
    );
  };
    
  export default Chambres;