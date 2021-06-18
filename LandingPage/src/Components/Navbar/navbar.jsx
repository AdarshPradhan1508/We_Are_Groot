import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,ImgLogo} from "./NavbarElements";
import {animateScroll as scroll} from 'react-scroll';
import Icon1 from './groot.png';

function Navbar ({toggle}) {

  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav =() =>
  {
      if(window.scrollY>=80)
      {
          setScrollNav(true);
      }
      else{
        setScrollNav(false);
      }
  }
   useEffect(() => {
       window.addEventListener('scroll',changeNav);
   },[])

   const toggleHome = () =>{
       scroll.scrollToTop();
   }

    return (
        <>
        
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}><ImgLogo src={Icon1}/>GreenWithGroot</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="sell" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sell</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="buy"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Buy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="footprint"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Footprint</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Profile</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>

        </>
    );
}

export default Navbar;
