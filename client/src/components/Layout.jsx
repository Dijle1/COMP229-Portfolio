import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";   // ✔ AuthContext eklendi

export default function Layout() {
  const { user, isAdmin, signOut } = useAuth();     // ✔ login & role bilgisi

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      {/* Simple logo */}
      <div
        className="logo"
        style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#4f46e5" }}
      >
        DA
      </div>

      {/* Navigation links */}
      <nav style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>
          Home
        </Link>

        <Link to="/about" style={{ margin: "0 1rem" }}>
          About
        </Link>

        <Link to="/education" style={{ margin: "0 1rem" }}>
          Education
        </Link>

        <Link to="/projects" style={{ margin: "0 1rem" }}>
          Projects
        </Link>

        <Link to="/services" style={{ margin: "0 1rem" }}>
          Services
        </Link>

        <Link to="/contact" style={{ margin: "0 1rem" }}>
          Contact
        </Link>

        {/* ADMIN LINK — sadece adminlere */}
        {isAdmin && (
          <Link to="/admin" style={{ margin: "0 1rem", fontWeight: "bold", color: "red" }}>
            Admin Panel
          </Link>
        )}

        {/* If NO USER → show Sign In / Sign Up */}
        {!user && (
          <>
            <Link to="/signin" style={{ margin: "0 1rem" }}>
              Sign In
            </Link>

            <Link to="/signup" style={{ margin: "0 1rem" }}>
              Sign Up
            </Link>
          </>
        )}

        {/* If USER LOGGED IN → show Logout */}
        {user && (
          <>
            <span style={{ margin: "0 1rem", fontStyle: "italic" }}>
              Hi, {user.name}
            </span>

            <button
              onClick={signOut}
              style={{
                margin: "0 1rem",
                padding: "6px 12px",
                background: "#f44336",
                color: "white",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
