import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
//Background nav

export const Nav = styled.nav`
  // @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap');
  font-family: 'Roboto', sans-serif;
  background: #efefef;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1200px) / 2);
  z-index: 12;
  @media screen and (max-width: 768px) {
    height: 60px;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;

// All links
export const NavLink = styled(Link)`
  color: #555555;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  padding: 0 10px;
  justify-content: center;
  &.active {
    font-weight: 600;
  }
`;

// Bars for mobile users
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Button
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Click on button
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #fff;
  padding: 10px 22px;
  color: #d8664e;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f8f8f8;
    color: #222;
    text-decoration: none;
    box-shadow: 0px 0px 12px #eeb6ab;
  }
`;