import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";   // ✔ DOĞRU PATH

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { signIn } = useAuth();   // ✔ AuthContext fonksiyonu

  // Form input change
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
      const res = await fetch("http://localhost:3000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // ✔ AuthContext ile kullanıcıyı kaydet
      signIn(data);

      setSuccess("Signin successful! Redirecting...");

      // ✔ Redirect with navigate
      setTimeout(() => {
        navigate("/");
      }, 1200);

    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign In</h2>

      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
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
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Don’t have an account? <a href="/signup">Create one</a>
      </p>
    </div>
  );
};

// Styles
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
    backgroundColor: "#2196f3",
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

export default Signin;
