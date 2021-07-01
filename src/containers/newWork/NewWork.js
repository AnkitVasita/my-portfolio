import React from "react";
import "./NewWork.css";
// import EducationCard from "../../components/educationCard/EducationCard";
import { newWorkInfo } from "../../portfolio";
import NewWorkCard from "../../components/newWorkCard/NewWorkCard";

export default function NewWork() {
  if (newWorkInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Work Experience</h1>
        <div className="education-card-container">
          {newWorkInfo.schools.map((school) => (
            <NewWorkCard school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
