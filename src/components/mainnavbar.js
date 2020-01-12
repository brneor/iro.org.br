import React from "react"
import { Link } from "gatsby"

import styles from "./mainnavbar.module.css"
import logo from "../images/iro-logo-200.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from "reactstrap"

export default class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={styles.bg_iro_red}>
        <Navbar dark expand="md" className="bg_iro_red">
          <NavbarBrand tag={Link} to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            <span className={[styles.bg_iro_red, styles.text_font_tinos, styles.font_variant_smallcaps, "mx-2"].join(" ")}>Igreja Reformada Ortodoxa</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sobre
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/sobre/">
                    A Teologia Reformada
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sobre/">
                    Confissões de Fé
                  </DropdownItem>
                  {/* <DropdownItem divider /> 
                  <DropdownItem tag={Link} to="/sobre/">
                    A Igreja Reformada Ortodoxa
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <NavLink tag={Link} to="/quemsomos/">Quem somos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog/">Blog</NavLink>
                {/* <NavLink tag={Link} to="/blog/">Blog</NavLink> */}
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contato/">Contato</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
