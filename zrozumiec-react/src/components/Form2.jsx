import { useState } from "react";

const initialReviews = [
  { author: "Jessica", text: "Super film!", id: 1 },
  { author: "Braian", text: "Nie podobal mi sie ", id: 1 },
];

export function Form2() {
  const [reviews, setReviews] = useState(initialReviews);

  const [inputValue, setInputValue] = useState("");

  const [textAreaValue, setAreaValue] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  const reviewsElement = reviews.map((r) => (
    <article key={r.id}>
      <strong>{r.author}</strong>
      <p>{r.text}</p>
    </article>
  ));

  console.log(isAdmin);

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

    const newReview = { author, text };

    setReviews((prevReviews) => [...prevReviews, newReview]);

    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

    // const newReview = { author, text };
  }

  //   console.log(`Autor:`, inputValue);
  //   console.log(`Tekst:`, textareaValue);

  return (
    <>
      <ul>{reviewsElement}</ul>
      <h1>Dodaj recenzje</h1>
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
