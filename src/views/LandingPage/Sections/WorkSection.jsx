import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import CircularIndeterminate from "../../Components/Progress";

class WorkSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null,
      email: null,
      name: null,
      isSending: false,
      errorName: false,
      errorEmail: false,
      errorMessage: false
    }
  }

  async validateForm(){
    //Set error text.
    if(!this.state.name || this.state.name === ""){
      await this.setState({errorName: true});
    }else{
      await this.setState({errorName: false});
    }

    if(!this.state.email || this.state.email === ""){
      await this.setState({errorEmail: true});
    }else{
      await this.setState({errorEmail: false});
    }

    if(!this.state.message || this.state.message === ""){
      await this.setState({errorMessage: true});
    }else{
      await this.setState({errorMessage: false});
    }

    return !(this.state.errorEmail &&
      this.state.errorName &&
      this.state.errorMessage);
    
  }

  async sendEmail() {

    await this.validateForm();
    if(this.state.errorName ||
       this.state.errorMessage 
       || this.state.errorEmail){
      return;
    }

    //Tell state to show wait symbol.
    this.setState({ isSending: true });

    //Send email.
    setTimeout(() => {
      let uri = `https://eocean-express1.herokuapp.com/sendEmailFromEStringSite?name=${decodeURIComponent(this.state.name)}&email=${decodeURIComponent(this.state.email)}`
      //let uri = `http://localhost:8000/sendEmailFromEStringSite?name=${decodeURIComponent(this.state.name)}&email=${decodeURIComponent(this.state.email)}`
      fetch(uri, {
        method: 'POST',
        //mode: "no-cors",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          message: encodeURIComponent(this.state.message)
        })
      })
        .then(response => response.json())
        .then(json => {
          //Hide wait.
          setTimeout(() => this.setState({ isSending: false }), 2000);

          //Tell user if success.
          if (json) {
            alert(`Message sent successfully.  Thankyou ${this.state.name}!  We usually respond the same business day!`);
          }
        })
        .catch(err => {
          console.log(err);

          //Hide wait.
          setTimeout(() => this.setState({ isSending: false }), 2000);
        })
    }, 3000);

  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  updateTheParent(keyName, value) {
    let o = {};
    o[keyName] = value;
    this.setState(o);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        {this.state.isSending ? <CircularIndeterminate /> : null}
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's do this thing!</h2>
            <h4 className={classes.description}>
              Let us know how we can work with you today.  Send us a message to introduce yourself, your company and
              to describe what challenges you are currently facing.
            </h4>
            <h4 className={classes.description}>
              We want to help you gain insight from <em>your</em> data!
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}

                    error = {this.state.errorName}
                    helperText = "Please enter your name."
                    initialValue=""
                    inputProps={this.state.name}
                    keyName="name"
                    updateParent={(keyName, value) => this.updateTheParent(keyName, value)}

                  />

                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}

                    error = {this.state.errorEmail}
                    helperText = "Please enter your email."

                    initialValue=""
                    inputProps={this.state.email}
                    keyName="email"
                    updateParent={(keyName, value) => this.updateTheParent(keyName, value)}

                  />


                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}

                  error = {this.state.errorMessage}
                  helperText = "Please enter your message."

                  initialValue=""
                  inputProps={this.state.message}
                  keyName="message"
                  updateParent={(keyName, value) => this.updateTheParent(keyName, value)}

                />
                <GridContainer justify="center" style={{width: 100 + "%"
              ,marginTop: 25}}>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                    
                  >
                    <Button color="primary" onClick={() => this.sendEmail()}>Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(WorkSection);
