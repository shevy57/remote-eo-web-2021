import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


import WorkSection from "../LandingPage/Sections/WorkSection.jsx";

class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="EOcean Data"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      {/* <img src={profile} alt="..." className={imageClasses} /> */}
                      <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ERead Email%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer1' fill='%23fff4e3' d='M54 33.6V21l8 6.9-8 5.7zm-44 0V21l-8 6.9 8 5.7z'%3E%3C/path%3E%3Cpath data-name='opacity' fill='%23000064' opacity='.14' d='M54 33.6V21l8 6.9-8 5.7zm-44 0V21l-8 6.9 8 5.7z'%3E%3C/path%3E%3Cpath data-name='layer2' d='M22.9 40.9c3.9-3.9 14.2-3.9 18.1 0l1 1 12-8.3V2H10v31.6l11.9 8.3z' fill='%23eefcff'%3E%3C/path%3E%3Cpath data-name='layer1' d='M41.1 40.9C37.2 37 26.9 37 23 40.9l-1 1L2 28v34h60V28L42.1 41.9z' fill='%23fff4e3'%3E%3C/path%3E%3Cpath data-name='stroke' fill='none' stroke='%23c82eae' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M10 21.1L2 28m52-6.9l8 6.9m-8 5.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28' stroke-linejoin='round'%3E%3C/path%3E%3Cpath data-name='stroke' fill='none' stroke='%23c82eae' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M62 28v34H2V28m40.1 13.9L62 28M2 28l19.9 13.9' stroke-linejoin='round'%3E%3C/path%3E%3Cpath data-name='stroke' d='M2 62l20.9-21.1c3.9-3.9 14.2-3.9 18.1 0L62 62' fill='none' stroke='%23c82eae' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' stroke-linejoin='round'%3E%3C/path%3E%3C/svg%3E" alt="Read Email" />

                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Contact Us</h3>
                      <h6></h6>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    {/* <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div> */}
                    <div className={classes.name}>
                      
                          <a href="mailto:sales@eoceandata.com">
                            sales@eoceandata.com
                            
                            </a>
                      
                      
                    </div>
                    <div className={classes.name}>
                      <h4>
                          <a href="tel:678-805-7781">678-805-7781</a>
                        </h4>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>


              <GridContainer justify="center" style={{ marginTop: -90 }}>
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <WorkSection />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

ContactPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(ContactPage);
