import { useState } from "react";

function App() {
  const [isSpoilerShown, setSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);

  function handleClick() {
    setSpoilerShown(true);
    console.log("handleClick:");
    setIsWarningShown(false);
  }
  // document.querySelector("button").addEventListener("click", () => {
  //   alert("Klik");
  // });

  function handleCloseWarningClick() {
    setIsWarningShown(false);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji</h2>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga! Opis fabuły zawiera spoiler!
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>Dobrzy walcza ze złem. Trzeba wyłączyć pole siłowe.</p>
      {isSpoilerShown ? (
        <p>Vader okazuje sie być ojcem Luka.</p>
      ) : (
        <button onClick={handleClick}>Pokaz spoiler</button>
      )}
    </>
  );
}

export default App;
