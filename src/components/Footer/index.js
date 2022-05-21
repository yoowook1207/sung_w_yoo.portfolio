import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    // FooterLinkTitle,
    FooterLink } from './FooterElements'
import { FaLinkedin, FaGithub, FaRegListAlt, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLink href="//bit.ly/3vFDTVL" target="_blank"><FaLinkedin/></FooterLink>
                            <FooterLink href="//bit.ly/3wG1G7g" target="_blank"><FaRegListAlt/></FooterLink>
                            <FooterLink href="//github.com/yoowook1207" target="_blank"><FaGithub/></FooterLink>
                            <FooterLink href="//instagram.com/yookywooky" target="_blank"><FaInstagram/></FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}


export default Footer