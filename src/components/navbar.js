import React from 'react'

import { NavLinkLogo, Nav, NavLink, NavMenu, Bars, BgLogo, BarDiv, SearchBar } from './navElement'

const Navbar = () => {
  return (
      <>
    <Nav>
        <NavLinkLogo to="/home">
            <BgLogo />
        </NavLinkLogo>
        <NavMenu>
            <NavLink to="/home" activeStyle>
                Home
            </NavLink>
            <NavLink to="/about" activeStyle>
                About
            </NavLink >
            <NavLink to="/projects" activeSytle>
                Projects
            </NavLink>
            <NavLink to="/contact" activeStyle>
                Contact
            </NavLink>
        </NavMenu>
        <BarDiv>
            <SearchBar />
          <Bars/>
        </BarDiv>
    </Nav>

    </>
  )
}

export default Navbar