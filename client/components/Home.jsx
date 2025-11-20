import { Link } from "react-router-dom";

// Home page component
export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      
      {/* Welcome message */}
      <h1>Welcome to My Portfolio!</h1>

      {/* Short introduction */}
      <p>
        Hi! I'm Dijle Arikan, a 3rd-semester Software Engineering student 
        at Centennial College specializing in Artificial Intelligence.
      </p>

      {/* Navigation buttons */}
      <div style={{ marginTop: "2rem" }}>
        <Link 
          to="/about" 
          style={{ 
            padding: "0.5rem 1rem", 
            backgroundColor: "#4f46e5", 
            color: "white", 
            borderRadius: "5px", 
            textDecoration: "none", 
            marginRight: "1rem" 
          }}
        >
          About Me
        </Link>

        <Link 
          to="/projects" 
          style={{ 
            padding: "0.5rem 1rem", 
            backgroundColor: "#4f46e5", 
            color: "white", 
            borderRadius: "5px", 
            textDecoration: "none" 
          }}
        >
          My Projects
        </Link>
      </div>

      {/* Mission statement */}
      <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
        My mission: To build interactive and efficient software solutions that make life easier.
      </p>
    </div>
  );
}
