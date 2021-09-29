import React, { Component } from "react";
import Pdf from "react-to-pdf";
import { makeStyles } from "@material-ui/core/styles";

const ref = React.createRef();

const useStyles = makeStyles((theme) => ({
  buttonDownload: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    background: "#77bb77",
    "&:hover": {
      background: "#548854",
    },
  },
  buttonBuildNew: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    boxShadow: "2px",
    "&:hover": {
      background: "#d6d6d6",
    },
  },
  resume: {
    width: "1200px",
    height: "900px",
    paddingLeft: "1rem",
    textAlign: "left",
  },
  upper: {
    textAlign: "center",
  },
}));

let refreshPage = () => {
  window.location.reload();
};

const Resume2 = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.resume} className="Post" ref={ref}>
        <div>
          <div  style={{ fontSize: "25px"}}className={classes.upper}>
            {props.firstname} {props.lastname}
          </div>
          <div className={classes.upper}>
            {" "}
            {props.phonenumber} | {props.email}
          </div>
          <hr />
          <div style={{ marginLeft: "15px" }}>
            <h4 style={{marginBottom: "2px"}}>LINKS</h4>
            <div>
              {" "}
              WEBSITE: {props.website} | GITHUB: {props.GitHub}{" "}
            </div>
            <div> INSTAGRAM: {props.instagram}</div>
          </div>

          
          <div style={{ marginLeft: "15px" }}>
          <h4 style={{marginBottom: "2px"}}> EDUCATIONAL DETAILS </h4>
            <div>
              {" "}
              COLLEGE: {props.College} | {props.Qualification} |{" "}
              {props.Description}{" "}
            </div>
            <div> GRADUATION YEAR: {props.graduation_year}</div>
            <div> SCHOOL: {props.School}</div>
            <div> 12TH PERCENTAGE: {props.percentage}</div>
            <div> YEAR OF PASSING: {props.year}</div>
          </div>

          
          <div style={{ marginLeft: "15px" }}>
          <h4 style={{marginBottom: "2px"}}> PROJECTS </h4>
            <div style={{ fontSize: "20px" }}> {props.Title}</div>
            <div> {props.Describe}</div>
            <div style={{ fontSize: "20px" }}> {props.Title2}</div>
            <div> {props.About}</div>
          </div>

          <div style={{ marginLeft: "15px" }}>
          <h4 style={{marginBottom: "2px"}}> EXPERIENCE </h4>
            <div style={{ fontSize: "20px" }}>
              - {props.Institute} | {props.Position}
            </div>
            <div> {props.Describe1}</div>
            <div style={{ fontSize: "20px" }}>
              - {props.Institute1} | {props.Position1}
            </div>
            <div> {props.Describe2}</div>
          </div>

          <h4 style={{marginBottom: "2px",marginLeft: "15px"}}> SKILLS </h4>
          <div style={{ fontSize: "20px", marginLeft: "15px" }}>
            <div> - {props.Skill_1}</div>
            <div> - {props.Skill_2}</div>
            <div> - {props.Skill_3}</div>
            <div> - {props.Skill_4}</div>
            <div> - {props.Skill_5}</div>
          </div>

          <h4 style={{marginBottom: "2px", marginLeft: "15px"}}> INTERESTS </h4>
          <div style={{ fontSize: "20px", marginLeft: "15px" }}>
            <div> - {props.Interest_1}</div>
            <div> - {props.Interest_2}</div>
            <div> - {props.Interest_3}</div>
            <div> - {props.Interest_4}</div>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="RESUME.pdf">
        {({ toPdf }) => (
          <button className={classes.buttonDownload} onClick={toPdf}>
            Download Resume
          </button>
        )}
      </Pdf>
      <button className={classes.buttonBuildNew} onClick={refreshPage}>
        Build New
      </button>
    </>
  );
};
export default Resume2;
