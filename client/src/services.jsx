import React from "react";

// Services page component
export default function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "Building responsive websites using React, HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      name: "UI/UX Prototyping",
      description: "Designing and prototyping clean, user-friendly interfaces.",
    },
    {
      id: 3,
      name: "API Integration",
      description: "Connecting applications with REST APIs for dynamic data.",
    },
  ];

  return (
    <section style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
      <h1>Services</h1>

      {/* List of services */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {services.map((s) => (
          <li
            key={s.id}
            style={{
              marginBottom: "16px",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: "#fff",
              color: "#000",       
            }}
          >
            <h3>{s.name}</h3>
            <p>{s.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
