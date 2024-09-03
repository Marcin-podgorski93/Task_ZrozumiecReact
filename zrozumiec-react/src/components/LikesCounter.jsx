import { useState } from "react";

export function LikesCounter() {
  const [numbersOfLikes, setNumberOfLikes] = useState(50);

  function handleLikeButtonClick() {
    setNumberOfLikes((prevValue) => prevValue + 1);
  }

  function handleLoveButtonClick() {
    setNumberOfLikes((prevValue) => prevValue + 3);
  }
  return (
    <>
      <h2>Liczba polubień: {numbersOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubie to!</button>
      <button onClick={handleLoveButtonClick}>Kocham To!</button>
    </>
  );
}
