import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminProjects() {
  const { token, isAdmin } = useAuth();
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", link: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all projects
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update project
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `http://localhost:3000/api/projects/${editingId}`
      : "http://localhost:3000/api/projects";

    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,  // admin token
      },
      body: JSON.stringify(formData),
    });

    setFormData({ title: "", description: "", link: "" });
    setEditingId(null);
    fetchProjects();
  };

  // Delete project
  const deleteProject = async (id) => {
    await fetch(`http://localhost:3000/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchProjects();
  };

  // Start edit mode
  const startEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      link: project.link,
    });
  };

  if (!isAdmin) {
    return <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Access Denied</h2>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Manage Projects</h1>

      {/* Project Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          style={{ display: "block", width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={formData.link}
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
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      <hr />

      {/* Project List */}
      <h2>All Projects</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((p) => (
          <li
            key={p._id}
            style={{
              padding: "1rem",
              borderBottom: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{p.title}</strong>
              <br />
              <small>{p.description}</small>
            </div>

            <div>
              <button
                onClick={() => startEdit(p)}
                style={{ marginRight: "10px", padding: "5px 10px", background: "orange" }}
              >
                Edit
              </button>

              <button
                onClick={() => deleteProject(p._id)}
                style={{ padding: "5px 10px", background: "red", color: "white" }}
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
