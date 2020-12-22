import React from "react";
import PropTypes from "prop-types";
import NavbarCustom from "./NavbarCustom";

import headerStyles from "./header.module.css";


const Header = ({ siteTitle }) => (
  <>
  <div style={{
    position: 'fixed',
    width: '100%',
    height: 'auto',
    zIndex: '99'
  }}>
      <NavbarCustom />
      </div>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
