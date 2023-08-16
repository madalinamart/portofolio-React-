import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #131313;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: .3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
 color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`


export const SidebarLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
`

export const SidebarLink = styled(LinkS)`
  text-align: center;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  background: #131313;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  line-height: 3rem;
  


  &:hover {
      color: #f08080;
      transition: .2s ease-in-out;
  }
`