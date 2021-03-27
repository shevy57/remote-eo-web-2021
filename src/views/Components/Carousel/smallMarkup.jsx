import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./custom-carousel-styles.css";
import Grid from '@material-ui/core/Grid';
import viz from 'assets/img/viz2.png';
import bidashboard from 'assets/img/bi-dashboard.png';



const defaultCaroItems = [
  
    {
        order: 1,
        html:
            <Grid container justify="center">
                <Grid item>
                    <img src="" />
                    <h1
                        className="LandingPage-title-2-override"
                    >
                        Trying to do analytics against multiple api data sources?
                    </h1>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={0} >
                        <Grid item>
                            <h4 className="LandingPage-title2-small">
                                <span class="LandingPage-title2-big-tm" style={{ color: "white" }}>
                                    {/* {"At eOcean Data we do just one thing"} */}
                                    eOcean’s API-Aggregation tooling makes you a data boss in an increasingly API driven world.
                            </span>
                            </h4>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <h4 className="LandingPage-subtitle-small"
                                    style={{
                                        height: "213px",
                                        width: "314px",
                                        overflow: "hidden",
                                        marginLeft: "10px"
                                    }}
                                >
                                    <img src={bidashboard}></img>
                                </h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    }
    ,    {
        order: 2,
        html:
            <Grid container justify="center">
                <Grid item>
                    <img src="" />
                    <h1
                        className="LandingPage-title-2-override"
                    >
                        Tableau, Power BI & Custom D3js/React-Vis
                    </h1>
                </Grid>
                <Grid item>
                    <Grid container direction="column" spacing={0} >
                        <Grid item>
                            <h4 className="LandingPage-title2-small">
                                <span class="LandingPage-title2-big-tm" style={{ color: "white" }}>
                                    {/* {"At eOcean Data we do just one thing"} */}
                                    Data visualization is not easy.  Let eOcean help you with your data visualization projects today.
                            </span>
                            </h4>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <h4 className="LandingPage-subtitle-small"
                                    style={{
                                        height: "213px",
                                        width: "314px",
                                        overflow: "hidden",
                                        marginLeft: "10px"
                                    }}
                                >
                                    <img src={viz}></img>
                                </h4>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    }
]


export default
    <div>
        <Carousel infiniteLoop autoPlay swipeable={true} showThumbs={false}
            showStatus={false}
            //showArrows={false}
            showIndicators={true}            
            swipeScrollTolerance={5}
            swipeable={false}

            interval={8000}
            transitionTime={1300}
        >

            {defaultCaroItems.sort((a, b) => a.order > b.order).map(item => {
                return <div>{item.html}</div>
            })
            }

        </Carousel>
    </div>