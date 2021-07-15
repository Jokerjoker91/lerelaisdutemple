import React from 'react';

import {FormattedMessage} from 'react-intl';

// const locSwitch = (type) => {
//     switch(type) {
//         case 'chalet':
//           return <div className="item left">Châlet romantique </div>;
//         default:
//           return <div className="item right">hello other</div>;
//     }
// }

const CompLoc = (props) => {
    return (
        <div className="box">
            <div className="title" style={parseInt(props.num) % 2 === 0 ? {left: "17%"} : {right: "17%"}}>{props.name}</div>
            <img src={"./img/"+props.type+"-1.jpg"} 
              style={{}} 
              alt={"photo "+ props.type} 
              className={parseInt(props.num) % 2 === 0 ? "item ord0" : "item ord5"}/>
              <img src={"./img/"+props.type+"-2.jpg"} 
              style={{}} 
              alt={"photo "+ props.type} 
              className={parseInt(props.num) % 2 === 0 ? "item ord1" : "item ord4"}/>
              <img src={"./img/"+props.type+"-3.jpg"} 
              style={{}} 
              alt={"photo "+ props.type} 
              className={parseInt(props.num) % 2 === 0 ? "item ord2" : "item ord3"}/>
            <div className={parseInt(props.num) % 2 === 0 ? "txt ord3" : "txt ord2"}><FormattedMessage id={props.type === "gite" ? "giteDesc" : "chaletsDesc"}/></div>
        </div>
    );
  };
    
  export default CompLoc;