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
import { VolumeUp, CloudDownloadOutlined,
  DashboardTwoTone, TouchAppTwoTone, CloudDownloadTwoTone } from "@material-ui/icons";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { CardHeader, CardActionArea } from "@material-ui/core";
import CardFooter from "components/Card/CardFooter";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// nodejs library that concatenates classes
import classNames from "classnames";
import biToolImage from "assets/img/bi-tool-intro.jpg";



class ProductSectionBI extends React.Component {
  render() {

    const { classes, title, description, iconColor, vertical } = this.props;

    const iconWrapper = classNames({
      [classes.iconWrapper]: true,
      [classes[iconColor]]: true,
      [classes.iconWrapperVertical]: vertical
    });
    const iconClasses = classNames({
      [classes.icon]: true,
      [classes.iconVertical]: vertical
    });

//    const { classes } = this.props;
    return (
      <div className={classes.section}>
        
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title} style={{color: "#00bcd4"}}>How can we help?</h2>            
            <h3 className={classes.description}>
            eOcean Data is a professional services firm
             with over 20 years of Software Development and BI experience.  
             <br/>We put that
              experience to work for you and
               get actionable insights in <em>days</em> or <em>weeks</em> - not months.
            </h3>
          </GridItem>

          {/* <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title} style={{color: "#009688"}}>
              What are your metrics for success?</h3>            
            <h3 className={classes.description}>
            What is your definition of success?  What metrics
            can you use to track and prove that success? 
            </h3>
          </GridItem> */}
        </GridContainer>
        <div>
          <GridContainer>

            <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.card} >
                  <CardContent >

                    <InfoArea
                    title="Data Extraction & Integration"
                    description="First, we partner with client 
                    stakeholders to identify key data sources and get to 
                    work extracting and coalescing your data from 
                    vendor API's, nosql and traditional sql databases and yes, all your excel files too ;)"
                    // icon={Chat}
                    icon={CloudDownloadTwoTone}
                    iconColor="info"
                    vertical
                    
                  />

                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
               </Card>          
            </GridItem>
            
            <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.card} >
                  <CardContent>

                    <InfoArea
                     title="Reporting & Data Visualization"
                     description="Next, we craft reports to help you where it's hurting.
                       It's critical to start building the reports as early as possible to prime the 
                       creative process and produce enough iterations for the cream to rise to the top.  
                       The early results of this step usually produce quite a bit of excitement and tend to add 
                       momentum to the project."
                     icon={DashboardTwoTone}
                     iconColor="success"
                     vertical
                  />

                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
               </Card>          
            </GridItem>

            
            <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.card} >
                  <CardContent>

                    <InfoArea
                    title="Automation"
                    description="We then automate the data collection 
                    process and refine reports into reporting dashboards and
                     storyboards that your C team and management can use to drive
                    their strategic decision making processes across the organization."
                    icon={TouchAppTwoTone}
                    iconColor="info"
                    vertical
                  />

                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
               </Card>          
            </GridItem>

          </GridContainer>
        </div>
      </div>
      
    );
  }
}

ProductSectionBI.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSectionBI);
