import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useclasses = makeStyles({
  button: {
    margin: 15,
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
  }
});

export default function Second() {

  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };
    const { values, handleChange } = this.props;
    const classes = useclasses();
    return (
      //   <MuiThemeProvider>
      <React.Fragment>
        <form>
          <Container>
            {/* <AppBar title="enter your details" /> */}

            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your firstname"
              floatingLabelText="FirstName"
              onChange={handleChange("firstname")}
              defaultValue={values.firstname}
              required
            />

            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your lastname"
              floatingLabelText="LastName"
              onChange={handleChange("lastname")}
              defaultValue={values.lastname}
              required
            />
            <br />
            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your email"
              floatingLabelText="email"
              onChange={handleChange("email")}
              defaultValue={values.email}
              required
            />
            <br />
            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your phonenumber"
              floatingLabelText="phonenumber"
              onChange={handleChange("phonenumber")}
              defaultValue={values.phonenumber}
              required
            />
            <br />
            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your website"
              floatingLabelText="website"
              onChange={handleChange("website")}
              defaultValue={values.website}
              required
            />
            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your GitHub"
              floatingLabelText="GitHub"
              onChange={handleChange("GitHub")}
              defaultValue={values.GitHub}
              required
            />
            <br />
            <TextField
              className={classes.field}
              variant="outlined"
              hintText="enter your instagram"
              floatingLabelText="instagram"
              onChange={handleChange("instagram")}
              defaultValue={values.instagram}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              label="Continue"
              secondary={true}
              className={classes.button}
              onClick={this.continue}
            >
              Continue
            </Button>
          </Container>
        </form>
      </React.Fragment>
      //   </MuiThemeProvider>
    );
}



