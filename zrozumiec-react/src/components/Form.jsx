import { useState } from "react";

export function Form({ onReviewSubmit }) {
  // state for initialReviews
  const [inputValue, setInputVale] = useState("");
  const [textareaValue, setareaVale] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    // we can use : setReview({ inputValue, textareaValue });
    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);

    setInputVale("");
    setareaVale("");
  }

  return (
    <>
      <hr />

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
            onChange={(e) => setInputVale(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={(e) => setareaVale(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue.length === 0 || textareaValue === ""}
        >
          Przeslij
        </button>
      </form>
    </>
  );
}
