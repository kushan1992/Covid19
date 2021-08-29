import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../../../assets/images/covid-logo.jpeg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar expand="md" className="header">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="logo-img" />
        </NavbarBrand>
      </Navbar>
    );
  }
}

Header.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default Header;
