import { useState } from "react";

export function Form2() {
  const [review, setReview] = useState(null);

  const [isAdmin, setIsAdmin] = useState(false);

  console.log(isAdmin);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[2].checked);
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    // or
    const author = e.target[0].value;
    const text = e.target[1].value;
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
          <input type="text" name="author" id="author" />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst</label>
          </div>
          <textarea name="text" id="text" cols="20" rows="5"></textarea>
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
        <button type="submit">Przeslij</button>
      </form>
    </>
  );
}
