import { useState } from "react";

export function Form2() {
  const [review, setReview] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const [textAreaValue, setAreaValue] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  console.log(isAdmin);

  const initialReview = [
    { author: "Braian", text: "Najlepszy film ever!", id: 1 },
    { author: "Jessica", text: "Za malo akcji !", id: 1 },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[2].checked);
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

    // or
    const author = inputValue;
    const text = textAreaValue;
    console.log(author);
    console.log(text);

    setReview({ author, text, isAdmin });
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

    // const newReview = { author, text };
  }

  //   console.log(`Autor:`, inputValue);
  //   console.log(`Tekst:`, textareaValue);

  return (
    <>
      <h1>Dodaj recenzje</h1>
      {review && (
        <>
          <h2>{review.author}</h2>
          <h3>{review.text}</h3>
          <p>{review.isAdmin ? "Administrator" : "Uzytkownik"}</p>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            type="text"
            name="author"
            id="author"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            cols="20"
            rows="5"
            value={textAreaValue}
            onChange={(e) => setAreaValue(e.target.value)}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="admin">
            Admin:
            <input
              id="admin"
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </label>
        </div>
        <br />
        <button
          type="submit"
          disabled={inputValue.length === 0 || textAreaValue === ""}
        >
          Przeslij
        </button>
      </form>
    </>
  );
}
