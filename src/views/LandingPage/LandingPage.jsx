import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import ProductSectionBI from "./Sections/ProcuctSectionBI";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import PreambleSection from "./Sections/PreambleSection.jsx";
import { Hidden } from "@material-ui/core";
import CarouselWrapper from "../Components/Carousel/CarouselWrapper.jsx"

const dashboardRoutes = [];

const localStyle={

}

class LandingPage extends React.Component {

  constructor(props){
    super(props);
    this.sTitle = "Want to unlock the strategic insights hidden in your business data?";
    this.sTitle2 ="At eOcean Data we do just one thing - we focus on helping small to medium sized businesses unlock the potential hiding in their data.";
  }
  

  getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  computeStyle(){
    //Given the width, manually create a media query.
    let w = this.getWidth();
    if(w == 667){
      return 300
    }

    return 700;
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="EOcean Data"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
        {/* <Hidden>Photo by <a href="/photographer/Ballez-51846">Hady Onaissi</a> from <a href="https://freeimages.com/">FreeImages</a></Hidden> */}
        <Parallax filter image={require("assets/img/jf.jpg")}>
          <div className={classes.container}>
            <div className="LandingPage-title-outer-small">
            {/* <GridContainer style={{flexDirection: "column"}}>              
              <GridItem xs={8} sm={8} md={6} style={{minWidth: "100%"}}>
                <h1 
                className="LandingPage-title-2-override"
                >
                  {this.sTitle}
                  </h1>
              </GridItem>
              <GridItem xs={4} sm={4} md={6} style={{minWidth: "100%"}} >                
                <h4 className="LandingPage-title2">
                  {this.sTitle2}                  
                </h4>
              </GridItem>
            </GridContainer> */}
            <CarouselWrapper size="small"></CarouselWrapper>
          </div>
          <div className="LandingPage-title-outer-big">
            <GridContainer >
              {/* <Hidden>Photo by <a href="/photographer/Ballez-51846">Hady Onaissi</a> from <a href="https://freeimages.com/">FreeImages</a></Hidden> */}
              <GridItem xs={12} sm={12} md={12}>
                {/* <h1 
                className="LandingPage-title-2-override"
                >
                  {this.sTitle}
                  </h1>
                <h4 className="LandingPage-title2-big">
                  {this.sTitle2}                  
                </h4> */}
                <CarouselWrapper></CarouselWrapper>
              </GridItem>
            </GridContainer>
          </div>

          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.container}>
            <PreambleSection />
            {/* <ProductSection />
             <TeamSection /> 
            <WorkSection /> */}
          </div>
        </div>
        

        <div className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: 60, backgroundColor: "#f8f8f8" }}>
          <div className={classes.container}>
         
            <ProductSectionBI/>
            
          </div>
        </div>


        <div className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: 60, backgroundColor: "#f8f8f8" }}>
          <div className={classes.container}>
            {/* <ProductSection />             */}
            <WorkSection />
          </div> 
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
