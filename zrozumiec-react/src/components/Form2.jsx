import { useState } from "react";

export function Form2() {
  const [review, setReview] = useState(null);

  console.log(review);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    // or
    const author = e.target[0].value;
    const text = e.target[1].value;
    console.log(author);
    console.log(text);

    setReview({ author, text });
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

    // const newReview = { author, text };
  }

  //   console.log(`Autor:`, inputValue);
  //   console.log(`Tekst:`, textareaValue);

  return (
    <>
      <h1>Dodaj recenzje</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="author">Autor</label>
          </div>
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea name="text" id="text" cols="20" rows="5"></textarea>
        </div>
        <button type="submit">Przeslij</button>
      </form>
    </>
  );
}
