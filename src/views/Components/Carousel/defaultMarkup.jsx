import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./custom-carousel-styles.css";
import Grid from '@material-ui/core/Grid';
import viz from 'assets/img/viz2.png';
import bidashboard from 'assets/img/bi-dashboard.png';

const caroSlideWithSubHeading = (text1, text2, text3) =>
    <Grid container direction="row" alignItems="flex-end">
        <Grid item xs={8}>
            <img src="" />
            <h1
                className="LandingPage-title-2-override"
            >
                {/* {"Want to unlock the strategic insights hidden in your business data?"} */}
                {text1}
            </h1>
        </Grid>
        <Grid item xs={4} >
            <Grid container direction="column">
                <Grid item>
                    <h4 className="LandingPage-title2-big">
                        <span class="LandingPage-title2-big-tm">
                            {/* {"At eOcean Data we do just one thing"} */}
                            {text2}
                        </span>
                    </h4>
                </Grid>
                <Grid item>
                    <h4 className="LandingPage-title2-big">
                        {/* {"We focus on helping small to medium sized businesses unlock the potential hiding in their data."} */}
                        {text3}
                    </h4>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;

const caroSlideRegular = (text1, text2) =>
    <Grid container direction="row" alignItems="flex-end">
        <Grid item xs={5}>
            <img src="" />
            <h1
                className="LandingPage-title-2-override"
            >
                {/* "Want to do analytics against multiple api data sources?" */}
                {text1}
            </h1>
        </Grid>
        <Grid item xs={7} >
            <Grid cont7iner direction="column">

                <Grid item>
                    <h4 className="LandingPage-title2-big">
                        {/* {"eOcean’s API-Aggregation tooling makes you a data boss in an increasingly API driven world."} */}
                        {text2}
                    </h4>
                </Grid>
            </Grid>
        </Grid>
    </Grid>


const buildSlideContent = (textValues, contentType) => {
    if (contentType == "type1") {
        return caroSlideWithSubHeading(textValues[0],
            textValues[1], textValues[2])
    }

    if (contentType == "regular") {
        return caroSlideRegular(textValues[0], textValues[1]);
    }
}

const defaultCaroItems = [
    // {
    //     order: 0,
    //     html: buildSlideContent(["Want to unlock the strategic insights hidden in your business data?",
    //     "At eOcean Data we do just one thing",
    // "We focus on helping small to medium sized businesses unlock the potential hiding in their data."],
    // "type1")
    // },
    {
        order: 3,
        html:
            <Grid container direction="row" alignItems="flex-start">
                <Grid item xs={5}>
                    <img src="" />
                    <h1
                        className="LandingPage-title-2-override"
                    >
                        Trying to do analytics against multiple api data sources?        
                </h1>
                </Grid>
                <Grid item xs={7} >
                    <Grid container direction="column">
                        <Grid item>
                            <h4 className="LandingPage-title2-big">
                                <span class="LandingPage-title2-big-tm"  style={{color: "white"}}>
                                    {/* {"At eOcean Data we do just one thing"} */}
                                    eOcean’s API-Aggregation tooling makes you a data boss in an increasingly API driven world.        
                            </span>
                            </h4>
                        </Grid>
                        <Grid item>
                            <h4 className="LandingPage-title2-big" style={{
    height: "354px",
    overflow: "hidden"
}}>
                                {/* {"We focus on helping small to medium sized businesses unlock the potential hiding in their data."} */}
                                <img src={bidashboard}></img>
                            </h4>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    },
    {
        order: 2,
        html: buildSlideContent([
            <span style={{color: "#005affd6"}}>Data Driven Storytelling</span>,
            "In our modern, data driven world, you need storytelling that holds up on its own.  Data driven storytelling is self evident and compelling."
        ], "regular")
    },
    {
        order: 3,
        html: buildSlideContent([
            <span style={{color: "#ff4600"}}>Tableau, Power BI & Custom D3js/React-Vis</span>,
            "visualization of data is critical in helping an organization gain insight into its customers, processes, emerging trends and more.  It is not easy.  Let eOcean help you with your data visualization projects today."
        ], "regular")
    },
    {
        order: 3,
        html:
            <Grid container direction="row" alignItems="flex-start">
                <Grid item xs={5}>
                    <img src="" />
                    <h1
                        className="LandingPage-title-2-override"
                    >
                        Tableau, Power BI & Custom D3js/React-Vis
                </h1>
                </Grid>
                <Grid item xs={7} >
                    <Grid container direction="column">
                        <Grid item>
                            <h4 className="LandingPage-title2-big">
                                <span class="LandingPage-title2-big-tm">
                                    {/* {"At eOcean Data we do just one thing"} */}
                                    Data visualization is not easy.  Let eOcean help you with your data visualization projects today.
                            </span>
                            </h4>
                        </Grid>
                        <Grid item>
                            <h4 className="LandingPage-title2-big">
                                {/* {"We focus on helping small to medium sized businesses unlock the potential hiding in their data."} */}
                                <img src={viz}></img>
                            </h4>
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
            interval={8000}
            transitionTime={1300}
        >

            {defaultCaroItems.sort((a, b) => a.order > b.order).map(item => {
                return <div>{item.html}</div>
            })
            }

        </Carousel>
    </div>