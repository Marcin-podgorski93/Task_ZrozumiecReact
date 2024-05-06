import { useState } from "react";

export function Form() {
  const [review, setReview] = useState(null);
  const [inputValue, setInputVale] = useState("");
  const [textareaValue, setareaVale] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    const author = inputValue;
    const text = textareaValue;
    console.log(author);
    console.log(text);
    setReview({ author, text });
  }

  return (
    <>
      <h1>Dodaj recenzje</h1>
      {review && (
        <>
          <h2>{review.author}</h2>
          <h3>{review.text}</h3>
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
