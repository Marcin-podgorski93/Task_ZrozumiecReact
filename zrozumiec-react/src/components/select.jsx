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
      <ul></ul>
    </>
  );
}
