import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="http://docencia.ac.upc.edu/FIB/grau/PAE/">PAE - GFT</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="https://www.fib.upc.edu/">FIB -UPC</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
