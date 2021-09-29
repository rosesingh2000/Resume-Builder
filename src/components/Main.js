import React, { Component } from "react";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Confirm from "./Confirm";
import Resume2 from "./Resume2";


export class Main extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    website: "",
    GitHub: "",
    instagram: "",

    College: "",
    Qualification: "",
    Description: "",
    graduation_year: "",
    School: "",
    percentage: "",
    year: "",

    Title: "",
    Describe: "",
    Title2: "",
    About: "",

    Institute: "",
    Position: "",
    Describe1: "",
    Institute1: "",
    Position1: "",
    Describe2: "",

    Skill_1: "",
    Skill_2: "",
    Skill_3: "",
    Skill_4: "",
    Skill_5: "",
    Interest_1: "",
    Interest_2: "",
    Interest_3: "",
    Interest_4: "",
  };
  nextstep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevstep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
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
    } = this.state;
    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <>
            <div className="col-lg-8 mx-auto text-center mt-5">
              <h1>
                <b>Let's generate your Resume!</b>
              </h1>
              <p className="lead">
                Please provide accurate and clear description wherever
                necessary.
              </p>
              <hr />
            </div>
            <Second
              nextstep={this.nextstep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );

      case 2:
        return (
          <>
            
            <Third
              nextstep={this.nextstep}
              prevstep={this.prevstep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );

      case 3:
        return (
          <>
            <Fourth
              nextstep={this.nextstep}
              prevstep={this.prevstep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );

      case 4:
        return (
          <>
            <Fifth
              nextstep={this.nextstep}
              prevstep={this.prevstep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 5:
        return (
          <>
            <Sixth
              nextstep={this.nextstep}
              prevstep={this.prevstep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 6:
        return (
          <>
            <Confirm
              nextstep={this.nextstep}
              prevstep={this.prevstep}
              values={values}
            />
          </>
        );
      case 7:
        return (
          <Resume2
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            phonenumber={this.state.phonenumber}
            website={this.state.website}
            GitHub={this.state.GitHub}
            instagram={this.state.instagram}
            College={this.state.College}
            Qualification={this.state.Qualification}
            Description={this.state.Description}
            graduation_year={this.state.graduation_year}
            School={this.state.School}
            percentage={this.state.percentage}
            year={this.state.year}
            Title={this.state.Title}
            Describe={this.state.Describe}
            Title2={this.state.Title2}
            About={this.state.About}
            Institute={this.state.Institute}
            Position={this.state.Position}
            Describe1={this.state.Describe1}
            Institute1={this.state.Institute1}
            Position1={this.state.Position1}
            Describe2={this.state.Describe2}
            Skill_1={this.state.Skill_1}
            Skill_2={this.state.Skill_2}
            Skill_3={this.state.Skill_3}
            Skill_4={this.state.Skill_4}
            Skill_5={this.state.Skill_5}
            Interest_1={this.state.Interest_1}
            Interest_2={this.state.Interest_2}
            Interest_3={this.state.Interest_3}
            Interest_4={this.state.Interest_4}
          />
        );
      default:
        return <div>thankhuhh done bye byeee</div>;
    }
  }
}
