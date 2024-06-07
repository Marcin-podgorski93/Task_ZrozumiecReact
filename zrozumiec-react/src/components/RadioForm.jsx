import { useState } from "react";

export function RadioForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [person, setPerson] = useState(null);

  function handleSubmit(e) {
    console.log(e.target[0].value);
    console.log(e.target[1].checked);
    console.log(e.target[2].checked);
    console.log(e.target[3].checked);
    e.preventDefault();
    setPerson({ name, role });
    setName("");
  }

  return (
    <>
      <h1>Dane osobowe:</h1>
      {person && (
        <>
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Imię"
          />
        </div>
        <div>
          <input
            id="user"
            name="role"
            value="Użytkownik"
            type="radio"
            checked={role === "Użytkownik"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="user">Użytkownik</label>
        </div>
        <div>
          <input
            id="moderator"
            name="role"
            value="Moderator"
            type="radio"
            checked={role === "Moderator"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="moderator">Moderator</label>
        </div>
        <div>
          <input
            id="admin"
            name="role"
            value="Administrator"
            type="radio"
            checked={role === "Administrator"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="admin">Administrator</label>
        </div>
        <button disabled={name.length === 0}>Zapisz</button>
      </form>
    </>
  );
}
