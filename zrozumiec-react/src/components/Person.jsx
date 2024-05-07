export function Person({ name, clearText }) {
  return (
    <h1>
      Wpisywane imię: {name}{" "}
      {name.length > 0 && <button onClick={() => clearText("")}>X</button>}
    </h1>
  );
}
