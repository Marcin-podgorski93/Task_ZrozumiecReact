import { useState } from "react";

export function Form() {
  //   const [review, setReview] = useState(null);

  return (
    <>
      <h1>Dodaj recenzje</h1>
      <form>
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
          <textarea name="text" id="text"></textarea>
        </div>
        <button type="submit">Przeslij</button>
      </form>
    </>
  );
}
