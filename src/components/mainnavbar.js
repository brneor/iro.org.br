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
        <Navbar dark expand="md" className={[styles.bg_iro_red].join(" ")}>
          <NavbarBrand tag={Link} to="/">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
            <span className={[styles.bg_iro_red, styles.text_font_tinos, styles.font_variant_smallcaps, "mx-2"].join(" ")}>Igreja Reformada Ortodoxa</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/sobre/">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contato/">Contato</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
