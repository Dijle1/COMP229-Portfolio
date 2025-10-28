import React from "react";
import { Link } from "react-router-dom";

// Layout component with navbar and logo
export default function Layout() {
  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: "1px solid #ccc" }}>
      
      {/* Simple logo */}
      <div className="logo" style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#4f46e5" }}>
        DA
      </div>

      {/* Navigation links */}
      <nav>
        <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
        <Link to="/education" style={{ margin: "0 1rem" }}>Education</Link>
        <Link to="/projects" style={{ margin: "0 1rem" }}>Projects</Link>
        <Link to="/services" style={{ margin: "0 1rem" }}>Services</Link>
        <Link to="/contact" style={{ margin: "0 1rem" }}>Contact</Link>
      </nav>
    </header>
  );
}
