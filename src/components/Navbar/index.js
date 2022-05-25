import React, {useState, useEffect} from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Dropdown,
    DropdownContent,
    DropdownA } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <IconContext.Provider value={{ color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> SUNG WOOK YOO</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <Dropdown>
                            Project
                            <DropdownContent>

                                <DropdownA to='project1'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >BRYSS</DropdownA>

                                <DropdownA to='project2'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >NEWS!FY</DropdownA>
                                
                                <DropdownA to='project3'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Wedding Invitation</DropdownA>
                                
                                <DropdownA to='projectGrid'
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >and more</DropdownA>

                            </DropdownContent>
                        </Dropdown>
                        <NavItem>
                            <NavLinks to='contactMe'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar