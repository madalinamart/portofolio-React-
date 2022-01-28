import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, Mobile, NavLinks, NavLink} from './NavbarElements';

const Navbar = ({toggleMobile}) => {
  return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo>portofolio</NavLogo>
                <Mobile onClick={toggleMobile}>
                    <FaBars />
                </Mobile>
                <NavLinks>
                    <NavLink to='about'
                    smooth={true}
                    duration={500}
                    exact='true'>
                        About me |</NavLink>
                    <NavLink to='technologies'
                    smooth={true}
                    duration={500}
                    exact='true'>
                        Technologies |</NavLink>
                    <NavLink to='projects'
                    smooth={true}
                    duration={500}
                    exact='true'>
                        Projects |</NavLink>
                </NavLinks> 
            </NavbarContainer>
        </Nav>
      </>
  );
};

export default Navbar;
