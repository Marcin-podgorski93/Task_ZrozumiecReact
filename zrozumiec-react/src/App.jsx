import { useState } from "react";

function App() {
  const [isSpoilerShown, setSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);
  const [isSection, setSection] = useState(1);
  const [numbersOfLikes, setNumberOfLikes] = useState(50);

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

  function handleLikeButtonClick() {
    setNumberOfLikes(numbersOfLikes + 1);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji</h2>
      <h2>Liczba polubień: {numbersOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubie to!</button>
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
      <h1>Ciekawostki o borsukach</h1>
      <button onClick={() => setSection(1)}>1</button>
      <button onClick={() => setSection(2)}>2</button>
      <button onClick={() => setSection(3)}>3</button>
      {isSection === 1 && (
        <section>
          <h2>Ciekawostka 1</h2>
          <p>Borsuki to ssaki z rodziny łasicowatych.</p>
        </section>
      )}
      {isSection === 2 && (
        <section>
          <h2>Ciekawostka 2</h2>
          <p>Ich dieta obejmuje owady i rośliny.</p>
        </section>
      )}
      {isSection === 3 && (
        <section>
          <h2>Ciekawostka 3</h2>
          <p>Borsuki są aktywne nocą.</p>
        </section>
      )}
    </>
  );
}

export default App;
