import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
 background: #131313;
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 


 @media screen and (max-width: 960px) {
     transition: .8s all ease;
 }
`

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 padding: 0 1rem;
`

export const NavLogo = styled.h2`
 color: #f08080;
 font-size: 2rem;
 justify-self: flex-start;
`

export const Mobile = styled.div`
 display: none;

 @media screen and (max-width: 860px){
     display: block;
     color: #fff;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
 }
`

export const NavLinks = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-items: space-between;
 margin-right: 1rem;


 @media screen and (max-width: 860px) {
     display: none;
 }
`

export const NavLink = styled(LinkS)`
 color: #fff;
 cursor: pointer;
 font-size: 1.5rem;
 padding: .5rem;
 text-decoration: none;
 
 &.active {
     border-bottom: 3px solid #fff;
 }
`