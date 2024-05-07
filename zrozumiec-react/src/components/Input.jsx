export function Input({ value, setter }) {
  return (
    <>
      <label htmlFor="text">Wpisz wartość:</label>
      <input id="text" value={value} onChange={(e) => setter(e.target.value)} />
    </>
  );
}
