import { useState } from "react";
import { Form } from "./components/Form";

const countries = [
  { name: "Polska", continent: "Europa" },
  { name: "Chiny", continent: "Azja" },
  { name: "Kongo", continent: "Afryka" },
  { name: "Francja", continent: "Europa" },
  { name: "Australia", continent: "Australia" },
  { name: "Włochy", continent: "Europa" },
];

function App() {
  // List countries
  const [filter, setFilter] = useState("Dowolny");
  const [isSpoilerShown, setSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);
  const [isSection, setSection] = useState(1);
  const [numbersOfLikes, setNumberOfLikes] = useState(50);
  const [activeImg, setActiveImg] = useState(0);

  function handlePrevButtonImg() {
    setActiveImg(activeImg === 0 ? 2 : activeImg - 1);
  }
  function handleNextButtonImg() {
    setActiveImg(activeImg === 2 ? 0 : activeImg + 1);
  }

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
    setNumberOfLikes((prevValue) => prevValue + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((prevValue) => prevValue + 3);
  }

  const filterCountries =
    filter === "Dowolny"
      ? countries
      : countries.filter((country) => country.continent === filter);

  // console.log(filterCountries);

  // console.log(filter);

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji</h2>
      <h2>Liczba polubień: {numbersOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubie to!</button>
      <button onClick={handleLoveButtonClick}>Kocham To!</button>
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
      <button onClick={handlePrevButtonImg}>Poprzednie</button>
      <button onClick={handleNextButtonImg}>Następne</button>
      <div>
        {activeImg === 0 && (
          <img src="https://zrozumiecreact.pl/dog.jpg" width="400" />
        )}
        {activeImg === 1 && (
          <img src="https://zrozumiecreact.pl/cat.jpg" width="400" />
        )}
        {activeImg === 2 && (
          <img src="https://zrozumiecreact.pl/duck.jpg" width="400" />
        )}
      </div>
      {/* Recenzja Filmu */}
      <Form />
      {/* Country List */}
      <h1>Lista krajów:</h1>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option selected value="Dowolny">
          Dowolny Kontynent
        </option>
        <option value="Azja">Azja</option>
        <option value="Afryka">Afryka</option>
        <option value="Australia">Australia</option>
        <option value="Europa">Europa</option>
      </select>
      <ul>
        {filterCountries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
