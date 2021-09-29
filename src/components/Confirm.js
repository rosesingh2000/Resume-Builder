import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextstep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevstep();
  };
  render() {
    const {
      values: {
        firstname,
        lastname,
        email,
        phonenumber,
        website,
        GitHub,
        instagram,
        College,
        Qualification,
        Description,
        graduation_year,
        School,
        percentage,
        year,
        Title,
        Describe,
        Title2,
        About,
        Institute,
        Position,
        Describe1,
        Institute1,
        Position1,
        Describe2,
        Skill_1,
        Skill_2,
        Skill_3,
        Skill_4,
        Skill_5,
        Interest_1,
        Interest_2,
        Interest_3,
        Interest_4,
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="CONFIRM USER details" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={firstname}
            ></ListItem>
            <ListItem
              primaryText="Last Name"
              secondaryText={lastname}
            ></ListItem>
            <ListItem primaryText="Email" secondaryText={email}></ListItem>
            <ListItem
              primaryText="Phone Number"
              secondaryText={phonenumber}
            ></ListItem>
            <ListItem primaryText="Website" secondaryText={website}></ListItem>
            <ListItem primaryText="Git Hub" secondaryText={GitHub}></ListItem>
            <ListItem
              primaryText="Instagram"
              secondaryText={instagram}
            ></ListItem>
            <ListItem primaryText="College" secondaryText={College}></ListItem>
            <ListItem
              primaryText="Qualification"
              secondaryText={Qualification}
            ></ListItem>
            <ListItem
              primaryText="Description"
              secondaryText={Description}
            ></ListItem>
            <ListItem
              primaryText="graduation-year"
              secondaryText={graduation_year}
            ></ListItem>
            <ListItem primaryText="School" secondaryText={School}></ListItem>
            <ListItem
              primaryText="Percentage"
              secondaryText={percentage}
            ></ListItem>
            <ListItem primaryText="Year" secondaryText={year}>
              {" "}
            </ListItem>
            <ListItem primaryText="Title" secondaryText={Title}></ListItem>
            <ListItem
              primaryText="Describe"
              secondaryText={Describe}
            ></ListItem>
            <ListItem primaryText="Title2" secondaryText={Title2}></ListItem>
            <ListItem primaryText="About" secondaryText={About}></ListItem>
            <ListItem
              primaryText="Institute"
              secondaryText={Institute}
            ></ListItem>
            <ListItem
              primaryText="Position"
              secondaryText={Position}
            ></ListItem>
            <ListItem
              primaryText="Describe1"
              secondaryText={Describe1}
            ></ListItem>
            <ListItem
              primaryText="Institute1"
              secondaryText={Institute1}
            ></ListItem>
            <ListItem
              primaryText="Position1"
              secondaryText={Position1}
            ></ListItem>
            <ListItem
              primaryText="Describe"
              secondaryText={Describe2}
            ></ListItem>
            <ListItem primaryText="Skill-1" secondaryText={Skill_1}></ListItem>
            <ListItem primaryText="Skill-2" secondaryText={Skill_2}></ListItem>
            <ListItem primaryText="Skill-3" secondaryText={Skill_3}></ListItem>
            <ListItem primaryText="Skill-4" secondaryText={Skill_4}></ListItem>
            <ListItem primaryText="Skill-5" secondaryText={Skill_5}></ListItem>
            <ListItem
              primaryText="Interest_1"
              secondaryText={Interest_1}
            ></ListItem>
            <ListItem
              primaryText="Interest_2"
              secondaryText={Interest_2}
            ></ListItem>
            <ListItem
              primaryText="Interest_3"
              secondaryText={Interest_3}
            ></ListItem>
            <ListItem
              primaryText="Interest_4"
              secondaryText={Interest_4}
            ></ListItem>
          </List>

          <br />
          <RaisedButton
            label="SUBMIT & CONTINUE"
            secondary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15,
  },
};
export default Confirm;
