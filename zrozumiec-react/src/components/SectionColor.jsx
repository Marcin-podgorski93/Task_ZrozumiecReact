import { useState } from "react";
// import "./styles.css";

export function SectionColor() {
  const [selectOption, setSelectedOption] = useState("");

  console.log(selectOption);

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  const selectedColor =
    selectOption.length > 0 ? `subtitle--${selectOption}` : "";

  console.log(selectedColor);

  return (
    <>
      <h1 className={`subtitle ${selectedColor}`}>Color</h1>

      <select onChange={handleSelect}>
        <option value disabled selected>
          Wybierz dowolny kolor
        </option>
        <option value="blue">Niebieski</option>
        <option value="orange">Pomaranczowy</option>
        <option value="green">Zielony</option>
      </select>
    </>
  );
}
