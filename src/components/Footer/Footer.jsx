/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
       
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.eoceandata.com"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.eoceandata.com"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>

               <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a> 
            </ListItem> */}
            <ListItem className={classes.inlineBlock}>
              
              <a href="https://orioniconlibrary.com/icon/read-email-4940" className={classes.block}>
               Orion Icon Library</a>
            </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} &nbsp;
          <a
            href="https://www.eoceandata.com"
            className={aClasses}
            target="_blank"
          >
            eOcean Data
          </a>{" "}
          
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
