import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SideNav from "react-simple-sidenav";
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

import FaqNav from './FaqNav'

import navStyles from "./navbar.module.css";
//import { LogoSquare } from "../images/index";

import { FaHome } from "react-icons/fa";

//then

const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "primary" : ""}
        variant={scroll ? "dark" : "light"}
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container>
          <Navbar.Brand>
          <Link to="/" rel="preload">
              <img
                className={scroll ? "d-inline-block align-top navLogo" : "hide"}
                /*src={LogoSquare}*/
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608597423/viadelweb/logo-stuff/logo-white-shadow-100x_f4gt9x.png"
                alt="Via Del Web Logo"
              ></img>
            </Link>

            <Link to="/" rel="preload">
              <img
                className={scroll ? "hide" : "d-inline-block align-top navLogo" }
                /*src={LogoSquare}*/
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608597423/viadelweb/logo-stuff/logo_c66qvi.png"
                alt="Via Del Web Logo"
              ></img>
            </Link>
            {/*<Dropdown className={scroll ? "hide" : "show"}>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="d-inline-block align-top"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/esp/home"
                  className={navStyles.pickLang}
                >
                  {" "}
                  <img
                    className="d-inline-block align-top"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                    alt="Logo"
                    height="40"
                  ></img>{" "}
                  Español
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>* /}
              </Dropdown.Menu>
  </Dropdown>*/}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/" active={false}>
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item to="/" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/" active={false}>
                  Who We Help
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              {/*<Nav.Item to="/servicios" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/servicios" active={false}>
                  Services
                </Nav.Link>
        </Nav.Item>*/}
              <NavDropdown
                as={Link}
                href="/services"
                to="/service"
                eventKey="services"
                title="Services"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Item{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Item{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className={navStyles.navItem}>
                <a
                href="https://app.viadelweb.com" 
                rel="nofollow"
                target="_blank"
                className="nav-link"
                >
                  Client Login
                </a>
              </Nav.Item>

              {/*<NavDropdown
                as={Link}
                href="/en/more"
                to="/en/more"
                eventKey="more"
                title="More"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <Nav className="mr-0">
            <Nav.Item to="/#" className={navStyles.navItem}>
                <Button secondary as={Link} to="/#" className={navStyles.CTAButton} active={false}>
                  Contact Us
                </Button>
              </Nav.Item>

            </Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
              padding: '0',
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/">
                About Us
              </Link>,
            <FaqNav
            items={[
              {
                question: "Services",
                answer:
                  "",
                  listItem1: '',
                  listItem2: '',
                  linkTitle1: 'Item',
                  link1: '/#',
                  linkTitle2: 'Item',
                  link2: '/#',
                  linkTitle3: 'Item',
                  link3: '/#',
                  linkTitle4: 'Item',
                  link4: '/#',
                  linkTitle5: 'Item',
                  link5: '/#',

              },
            ]}
          />,
              <Link
                rel="preload"
                className={navStyles.navItem}
                to="/en/home#"
              >
                Who We Help
              </Link>,
              <Link
                rel="preload"
                className={navStyles.navItem}
                to="/contact"
              >
                Contact
              </Link>,

              <a
                rel="nofollow"
                target="_blank"
                href="https://app.viadelweb.com"
                className={navStyles.navItem}
              >
                Client Login
              </a>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
            }}
            navStyle={{
              width: "70%",
              background: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
              color: "inherit",
              maxHeight: "100vh",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
