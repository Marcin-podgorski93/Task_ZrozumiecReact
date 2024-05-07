import { useState } from "react";
import { Review } from "./Review";

const initialReviews = [
  { author: "Brian", text: "Najlepszy film!", id: 1 },
  { author: "Jessica", text: "Podobal mi sie, duzo akcji!", id: 2 },
];

export function Form() {
  // state for initialReviews
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputVale] = useState("");
  const [textareaValue, setareaVale] = useState("");

  const reviewsElement = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    // we can use : setReview({ inputValue, textareaValue });
    const author = inputValue;
    const text = textareaValue;

    setReviews((prevReview) => {
      return [{ author, text, id: prevReview.length + 1 }, ...prevReview];
    });

    setInputVale("");
    setareaVale("");
  }

  return (
    <>
      <hr />
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
