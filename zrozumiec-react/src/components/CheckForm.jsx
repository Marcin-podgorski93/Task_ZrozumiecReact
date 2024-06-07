import { useState } from "react";

export function CheckForm() {
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [person, setPerson] = useState(null);

  function handleSubmit(e) {
    console.log(e.target[0].value);
    console.log(e.target[1].checked);
    e.preventDefault();
    setPerson({ name, isAdmin });
    setName("");
  }

  return (
    <>
      <h1>Dane osobowe:</h1>
      {person && (
        <>
          <h2>{person.name}</h2>
          <h3>{person.isAdmin ? "Administrator" : "Użytkownik"}</h3>
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
          <label htmlFor="admin">
            Admin:
            <input
              id="admin"
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </label>
        </div>
        <button disabled={name.length === 0}>Zapisz</button>
      </form>
    </>
  );
}
