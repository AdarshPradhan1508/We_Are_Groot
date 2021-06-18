import React from 'react'
import {SidebarContainer,Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="sell" onClick={toggle}>Sell</SidebarLink>
                  <SidebarLink to="buy" onClick={toggle}>Buy</SidebarLink>
                  <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                  <SidebarLink to="footprint" onClick={toggle}>Footprint</SidebarLink>
              </SidebarMenu>
                <SideBtnWrap>
                  <SidebarRoute to="/signin">Profile</SidebarRoute>
                </SideBtnWrap>
          </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
