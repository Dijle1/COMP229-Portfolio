import React from "react";


// Projects page component
export default function Project() {
  const projectList = [
    {
      title: "Word Guessing App",
      image: "/images/wordguess.jpg.webp",
      description: "A fun word guessing game built with JavaScript where users try to guess the correct word letter by letter."
    },
    {
      title: "Pokemon App",
      image: "/images/pokemon.jpg",
      description: "A simple Pokemon app created with JavaScript that allows users to browse and search Pokemon characters."
    },
    {
      title: "Calculator",
      image: "/images/calculator.jpg",
      description: "A basic calculator app created with JavaScript for performing arithmetic operations."
    }
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>My Projects</h1>

      {/* Display all projects in a flex container */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
        {projectList.map((project, index) => (
          <div key={index} style={{ border: "1px solid #fefffdff", borderRadius: "8px", padding: "1rem", width: "280px" }}>
            
            {/* Project image */}
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: "100%", borderRadius: "5px" }} 
            />
            
            {/* Project title and description */}
            <h3 style={{ marginTop: "0.5rem" }}>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
