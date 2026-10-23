"use client";
import { useEffect, useState } from "react";

export default function StateList() {
  const [stateList, setStateList] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  async function loadStates() {
    const response = await fetch("/api/state");
    const data = await response.json();
    if (response.ok) {
      setStateList(data);
    } else {
      setError("Could not load the states");
    }
  }

  useEffect(() => {
    loadStates();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postalCode, name, description }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      return;
    }
    setError("");
    setPostalCode("");
    setName("");
    setDescription("");
    loadStates();
  }

  async function handleDelete(id) {
    const response = await fetch("/api/state/" + id, { method: "DELETE" });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      return;
    }
    setError("");
    loadStates();
  }

  return (
    <main>
      <h1>States</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Postal code"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {stateList.map((state) => (
          <li key={state.id}>
            {state.postalCode} - {state.name} ({state.description}){" "}
            <button onClick={() => handleDelete(state.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
