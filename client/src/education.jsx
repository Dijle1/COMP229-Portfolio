import React from "react";

// Education page component
export default function Education() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Education</h1>

      {/* List of educational qualifications */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "1rem" }}>
          <strong>Centennial College</strong> — Software Engineering, 3rd Semester, AI Focus
          <br />
          <em>Expected Graduation: 2027</em>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <strong>High School Diploma</strong> — Tunceli Science High School
          <br />
          <em>Graduated: 2022</em>
        </li>
      </ul>
    </div>
  );
}
