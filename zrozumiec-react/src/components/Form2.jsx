import { useState } from "react";

const initialReview = [
  { author: "Jessica", text: "super film!", id: 1 },
  { author: "Matthew", text: "Widzialem lepsze", id: 2 },
];

export function Form2() {
  const [reviews, setReviews] = useState(initialReview);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

    const author = inputValue;
    const text = textareaValue;

    // const newReview = { author, text };
    setReviews((prevReview) => {
      const newReview = { author, text, id: prevReview.length + 1 };
      console.log(newReview);
      return [newReview, ...prevReview];
    });
    setInputValue("");
    setTextareaValue("");
  }

  //   console.log(`Autor:`, inputValue);
  //   console.log(`Tekst:`, textareaValue);

  const reviewsElement = reviews.map((r) => (
    <article key={r.id}>
      <strong>{r.author}</strong>
      <p>{r.text}</p>
    </article>
  ));

  return (
    <>
      <h1>Dodaj recenzje</h1>
      {reviewsElement}
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            name="text"
            id="text"
            cols="20"
            rows="5"
          ></textarea>
        </div>
        <button>Przeslij</button>
      </form>
    </>
  );
}
