import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      setSuccess("Signup successful! Redirecting to Signin...");
      setFormData({ name: "", email: "", password: "" });

      // Redirect after 1.5 seconds
      setTimeout(() => {
        window.location.href = "/signin";
      }, 1500);

    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create an Account</h2>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 characters)"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

// Inline styles (clean + simple)
const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "10px",
    background: "#ffffff",
    border: "1px solid #ddd",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    background: "#ffdddd",
    color: "#d8000c",
    padding: "8px",
    borderRadius: "6px",
  },
  success: {
    background: "#ddffdd",
    color: "#4F8A10",
    padding: "8px",
    borderRadius: "6px",
  },
};

export default Signup;