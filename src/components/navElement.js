import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {FaSearch as Search} from 'react-icons/fa'
import logo from '../resources/stavel1.png'


export const Nav = styled.nav`
    border-bottom: 1px solid #fff;
   height: 100px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   padding-top: 0.5rem calc((100vw -1000px)/2);
   position: absolute;
   top: 0;
   z-index: 10;

`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem;
    cursor: pointer;
    margin-right: 100px;


    &.active{
        color:#D94C80;
        transition: all 0.2s ease-in-out;
    }
    &:hover{
        color:#D94C80;
        transition: all 0.1s ease-in-out;

    }
    `
    export const NavLinkLogo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem;
    margin-left: 40px;
    margin-top: 30px;
    cursor: pointer;
    &active{
        color: #000;
    }
    `


    export const BarDiv = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem;
    cursor: pointer;
    margin-top: 50px;
    margin-right: 100px;
    

    &active{
        color: #000;
    }
    `

export const Bars = styled(Search)`
    display: flex;
    color: #fff;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    white-space: noo-wrap;
    justify-content: flex-end;
    margin-top: 50px;
`
export const BgLogo = styled.img.attrs({
    src: `${logo}`
  })`
  height: 160px;
  width: 250px;
  
  @media screen and (max-width: 760px){
    display: none;
  }
`
export const SearchBar = styled.input.attrs({
    type: "text",
    placeholder: "Search for properties"
})`
    border-radius: 0.5rem;
    margin-right: 10px;
    outline: none;
    padding: 0.2rem;
    padding-left: 0.5rem;
    background: rgba(255,255,255,0.1);
    border: none;
    resize: none;
    color: #fff;

    }
    `

