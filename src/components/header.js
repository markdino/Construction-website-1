import React, { Component } from "react"
import { Link } from "gatsby"
import "./header.scss"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import logo from "../images/logo.png"

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div className="header">
        <Navbar color="dark" dark expand="md" className="navbar fixed-top">
          <Container>
            <NavbarBrand href="/">
              <img src={logo} alt="RDC Logo" />
              {this.props.siteTitle}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/"
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/services"
                  >
                    Services
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/projects"
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/carrers"
                  >
                    Careers
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/about"
                  >
                    About Us
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "lightgreen", fontWeight: "bold" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
