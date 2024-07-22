import { useState } from "react";

export function Pictures() {
  const [activeImg, setActiveImg] = useState(0);

  function handlePrevButtonImg() {
    setActiveImg(activeImg === 0 ? 2 : activeImg - 1);
  }
  function handleNextButtonImg() {
    setActiveImg(activeImg === 2 ? 0 : activeImg + 1);
  }

  return (
    <>
      <button onClick={handlePrevButtonImg}>Poprzednie</button>
      <button onClick={handleNextButtonImg}>Następne</button>
      <div>
        {activeImg === 0 && (
          <img src="https://zrozumiecreact.pl/dog.jpg" width="400" />
        )}
        {activeImg === 1 && (
          <img src="https://zrozumiecreact.pl/cat.jpg" width="400" />
        )}
        {activeImg === 2 && (
          <img src="https://zrozumiecreact.pl/duck.jpg" width="400" />
        )}
      </div>
    </>
  );
}
