import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarLinks} from './SidebarElements';

const Sidebar = ({isOpen, toggleMobile}) => {
  return (
      <>
      <SidebarContainer isOpen={isOpen} onClick={toggleMobile}>
          <Icon onClick={toggleMobile}>
              <CloseIcon />
          </Icon>
          <SidebarLinks>
              <SidebarLink to='about'
              smooth={true}
              duration={500}
              exact='true'
               onClick={toggleMobile}>About</SidebarLink>
              <SidebarLink to='technologies' 
              smooth={true}
              duration={500}
              exact='true'
               onClick={toggleMobile}>Technologies</SidebarLink>
              <SidebarLink to='projects' 
              smooth={true}
              duration={500}
              exact='true'
               onClick={toggleMobile}>Projects</SidebarLink>
          </SidebarLinks>
      </SidebarContainer>
      </>
  );
};

export default Sidebar;
