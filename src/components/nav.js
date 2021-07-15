import React from 'react';
import {connect} from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import {FormattedMessage} from 'react-intl';

import "./nav.css"

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './navElems.js';

const Navbar = (props) => {

    return (
        // https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
        <>
        <Nav>
            <Bars onClick={() => props.dispatch({type: "TOGGLE"})}/>
            <img
                    alt="logo"
                    src="./img/logo_rdt.svg"
                    className="logo"/>
            <NavMenu>
                
                <NavLink to='/home' className="nav_link">
                    <FormattedMessage id="accueil"/>
                </NavLink>
                <NavLink to='/activites' className="nav_link">
                    <FormattedMessage id="activites"/>
                </NavLink>
                <NavLink to='/blog' className="nav_link">
                    <FormattedMessage id="blog"/>
                </NavLink>
                <NavLink to='/chambres' className="nav_link">
                    <FormattedMessage id="chambres"/>
                </NavLink>

            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/reservation'><FormattedMessage id="reservation"/></NavBtnLink>
            </NavBtn>
            <Dropdown>
            <Dropdown.Toggle className="langue" variant="secondary">
                {props.langue==="fr"? "fr " : "en "}
                {console.log(props)}
            </Dropdown.Toggle>

            <Dropdown.Menu id="ddm">
                <Dropdown.Item className={props.langue==="fr"?"activeLang" : "txtLang"} onClick={() => props.onChangeLanguage("FR")}>fr</Dropdown.Item>
                <Dropdown.Item className={props.langue==="en"?"activeLang" : "txtLang"} onClick={() => props.onChangeLanguage("GB")}>en</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>   

        </Nav>
        {props.boolMenu?
        <>
        <NavLink to='/home' className="nav_mob">
            <FormattedMessage id="accueil"/>
        </NavLink>
        <NavLink to='/activites' className="nav_mob">
            <FormattedMessage id="activites"/>
        </NavLink>
        <NavLink to='/blog' className="nav_mob">
            <FormattedMessage id="blog"/>
        </NavLink>
        <NavLink to='/chambres' className="nav_mob">
            <FormattedMessage id="chambres"/>
        </NavLink>
        <NavLink to='/reservation' className="nav_mob">
            <FormattedMessage id="reservation"/>
        </NavLink>
        </>:null}
        </>
    );
};

const mapStateToProps = state => {
    return {
        boolMenu: state.boolMenu,
        lang: state.lang
    }
}

export default connect(mapStateToProps)(Navbar);