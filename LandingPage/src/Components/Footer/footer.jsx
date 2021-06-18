import React from 'react'
import {FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Information</FooterLinkTitle>
                            <FooterLink to="/signin">About Us</FooterLink>
                            <FooterLink to="/signin">Terms & Conditions</FooterLink>
                            <FooterLink to="/signin">Returns,Refunds and Cancellations</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">Email</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Mobile number</FooterLink>
                        
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
              
        </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
