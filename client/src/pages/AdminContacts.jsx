import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AdminContacts() {
  const { token, isAdmin } = useAuth();
  const [contacts, setContacts] = useState([]);

  // Fetch contact messages
  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3000/api/contacts");
    const data = await res.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete a contact message
  const deleteContact = async (id) => {
    await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchContacts();
  };

  if (!isAdmin) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Access Denied
      </h2>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contact Messages</h1>

      {contacts.length === 0 && (
        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>
          No messages found.
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
        {contacts.map((c) => (
          <li
            key={c._id}
            style={{
              padding: "1rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <p>
              <strong>Name:</strong> {c.name}
            </p>
            <p>
              <strong>Email:</strong> {c.email}
            </p>
            <p>
              <strong>Message:</strong>
              <br /> {c.message}
            </p>

            <button
              onClick={() => deleteContact(c._id)}
              style={{
                marginTop: "1rem",
                padding: "8px 14px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete Message
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
