import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminQualifications() {
  const { token, isAdmin } = useAuth();
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    institution: "",
    year: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch qualifications
  const fetchQualifications = async () => {
    const res = await fetch("http://localhost:3000/api/qualifications");
    const data = await res.json();
    setQualifications(data);
  };

  useEffect(() => {
    fetchQualifications();
  }, []);

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add or update qualification
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:3000/api/qualifications/${editingId}`
      : "http://localhost:3000/api/qualifications";

    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // admin kontrolü
      },
      body: JSON.stringify(formData),
    });

    setFormData({ title: "", institution: "", year: "" });
    setEditingId(null);

    fetchQualifications();
  };

  // Delete qualification
  const deleteQualification = async (id) => {
    await fetch(`http://localhost:3000/api/qualifications/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchQualifications();
  };

  // Edit mode
  const startEdit = (q) => {
    setEditingId(q._id);
    setFormData({
      title: q.title,
      institution: q.institution,
      year: q.year,
    });
  };

  if (!isAdmin) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Access Denied</h2>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Manage Qualifications</h1>

      {/* Qualification Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Qualification Title"
          value={formData.title}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {editingId ? "Update Qualification" : "Add Qualification"}
        </button>
      </form>

      <hr />

      {/* Qualification List */}
      <h2>All Qualifications</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {qualifications.map((q) => (
          <li
            key={q._id}
            style={{
              padding: "1rem",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{q.title}</strong>
              <br />
              <small>{q.institution}</small> — {q.year}
            </div>

            <div>
              <button
                onClick={() => startEdit(q)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  background: "orange",
                  color: "white",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteQualification(q._id)}
                style={{
                  padding: "5px 10px",
                  background: "red",
                  color: "white",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
