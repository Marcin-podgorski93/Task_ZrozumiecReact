import { useState } from "react";

const countries = [
  { name: "Polska", continent: "Europa" },
  { name: "Chiny", continent: "Azja" },
  { name: "Kongo", continent: "Afryka" },
  { name: "Francja", continent: "Europa" },
  { name: "Australia", continent: "Australia" },
  { name: "Włochy", continent: "Europa" },
];

export function Select1() {
  const [filter, setFilter] = useState("Dowolny");

  console.log(filter);

  const handleSelect =
    filter === "Dowolny"
      ? countries
      : countries.filter((country) => country.continent === filter);

  console.log("Wybrany kontynent:", filter);
  console.log("Wybrane kraje:", handleSelect);

  return (
    <>
      <h1>Select</h1>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="Dowolny">Dowolny</option>
        <option value="Azja">Azja</option>
        <option value="Europa">Europa</option>
        <option value="Australia">Australia</option>
        <option value="Afryka">Afryka</option>
      </select>
      <ul>
        {handleSelect.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}
