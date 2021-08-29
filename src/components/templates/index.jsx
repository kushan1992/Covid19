import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./header";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Header />
        {children}
      </Fragment>
    );
  }
}
Template.propTypes = {
  children: PropTypes.node,
};

Template.defaultProps = {
  children: null,
};

export default Template;
