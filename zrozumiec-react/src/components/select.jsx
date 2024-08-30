export function Select1() {
  return (
    <>
      <h1>Select</h1>

      <select onChange={(e) => console.log(e.target.value)}>
        <option value="Dowolny">Dowolny</option>
        <option value="Azja">Azja</option>
      </select>
    </>
  );
}
