import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import { VolumeUp } from "@material-ui/icons";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{paddingTop: 15}}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title} style={{color: "#814ea8", 
            fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontWeight: 300}}>
              Every day, your business
             is generating huge amounts of data stored in 
             <em> somebody else's</em> cloud - not yours...</h2>
            
             <h3 className={classes.description}>
             How do you get to this data?
             <br/>How do you realize
              actionable strategic insights from it?
              <br/>Is your process manageable?
              
             </h3>

            <h3 className={classes.description}>
              With modern companies racing to fully 
              digitize their business - 
              integration and reporting takes center stage.
            <br />
              <br />
              Every day, your business generates huge amounts of data using
                   3rd party SaaS apps.  That data is living in <em>their</em> cloud -
             not yours.  
                   <br />
              <br />
              Right now, your business data
              is telling a story.  Do you own the narrative?
            </h3>
          </GridItem>
        </GridContainer>

      </div>
      
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
