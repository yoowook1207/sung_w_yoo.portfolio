import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    // FooterLinkTitle,
    FooterLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLink to='/'>LinkedIn</FooterLink>
                            <FooterLink to='/'>Resume</FooterLink>
                            <FooterLink to='/'>GitHub</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>

    </FooterContainer>
  )
}


export default Footer