import { ButtonStrong } from "./components/ButtonStrong";

function App() {
  const buttonEl = (
    <button
      onClick={() => {
        alert("Klik");
      }}
    >
      Pokaz spoiler
    </button>
  );

  // document.querySelector("button").addEventListener("click", () => {
  //   alert("Klik");
  // });

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji</h2>
      <h2>Fabuła</h2>
      <p>Dobrzy walcza ze złem. Trzeba wyłączyć pole siłowe.</p>
      {buttonEl}
      <ButtonStrong onClick={() => alert("Gruby Klik")}>
        Pokaz GRUBY spoiler
      </ButtonStrong>
      <p>Vader okazuje sie być ojcem Luka.</p>
    </>
  );
}

export default App;
