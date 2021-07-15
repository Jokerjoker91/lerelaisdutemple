import React from 'react';
import {connect} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel';
import {FormattedMessage} from 'react-intl';
import "./home.css"

const Home = (props) => {
    return (
      <div
        style={{
          // display: 'flex',
          // justifyContent: 'Right',
          // alignItems: 'Right',
          // height: '100vh'
        }}
      >
        <Carousel id="overlay2">
          <Carousel.Item interval={3000}>
              <img
              className={props.boolMenu ? "d-block w-100 imgMenu" : "d-block w-100"}
              src="img/accueil-1.jpg"
              alt="Second slide"
              />
              <Carousel.Caption>
              <p className="slideCap"><FormattedMessage id="txtSlide2"/></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
              <img
              className={props.boolMenu ? "d-block w-100 imgMenu" : "d-block w-100"}
              // className={`d-block w-100 ${props.boolMenu ? "imgMenu" : ""}`}
              // className="d-block w-100"
              src="img/piscine-1.jpg"
              alt="Piscine"
              />
              <Carousel.Caption>
              <p className="slideCap"><FormattedMessage id="txtSlide1"/></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
              <img
              className={props.boolMenu ? "d-block w-100 imgMenu" : "d-block w-100"}
              src="img/chalet-1.jpg"
              alt="Third slide"
              />
              <Carousel.Caption>
              <p className="slideCap"><FormattedMessage id="txtSlide3"/></p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
              <img
              className={props.boolMenu ? "d-block w-100 imgMenu" : "d-block w-100"}
              src="img/chambre-1.jpg"
              alt="Fourth slide"
              />
              <Carousel.Caption>
              <p className="slideCap"><FormattedMessage id="txtSlide4"/></p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className={props.boolMenu ? "overlay1 o1menu" : "overlay1"}>
          <h1 id="h11"><FormattedMessage id="bvn1"/></h1>
          <h1 id="h12"><FormattedMessage id="bvn2"/></h1>
          <h2><FormattedMessage id="bvnDesc"/></h2>
        </div>
      </div>
    );
  };

  const mapStateToProps = state => {
    return {
        boolMenu: state.boolMenu
    }
}
    
  export default connect(mapStateToProps)(Home);