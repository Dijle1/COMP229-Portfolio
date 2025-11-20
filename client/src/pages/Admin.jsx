import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Admin() {
  const { user, isAdmin } = useAuth();

  if (!isAdmin) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Access Denied</h1>
        <p>You are not authorized to view this page.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ marginBottom: "2rem" }}>Admin Panel</h1>

      <p>Welcome, <strong>{user.name}</strong> </p>

      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link
          to="/admin/projects"
          style={{
            padding: "1rem",
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Manage Projects
        </Link>

        <Link
          to="/admin/qualifications"
          style={{
            padding: "1rem",
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Manage Qualifications
        </Link>

        <Link
          to="/admin/contacts"
          style={{
            padding: "1rem",
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View Contact Messages
        </Link>
      </div>
    </div>
  );
}
