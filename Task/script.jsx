// JSX
// Problem z datą
// Poniższy kod powinien wyświetlać aktualny rok, ale coś poszło nie tak... Czy widzisz gdzie leży problem?

import ReactDOM from "react-dom/client";

const currentDate = new Date();
const year = currentDate.getFullYear();

const timer = <div>Mamy rok: {year}</div>;

ReactDOM.createRoot(document.getElementById("root")).render(timer);

// JSX
// Kalkulajca godziny
// Nasz zegar ma pewien problem - jeśli godzina lub minuta jest jednocyfrowa, to pokazany czas wygląda dość nienaturalnie, np. o 01:05wyświetlimy1:5.
// Przekształć kod tak, żeby wyświetlał czas w formacie hh:mm, czyli np. 01:05.

import ReactDOM from "react-dom/client";

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedHours = hours < 10 ? `0${hours}` : hours;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

const timer = (
  <div>
    {formattedHours}:{formattedMinutes}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(timer);

// JSX
// Kalkulajca daty
// Poniższy kod zawsze wyświetla tę samą datę. Przekształć go tak, żeby zachował ten sam format, ale wyświetlał aktualną datę wraz z aktualną godziną.

import ReactDOM from "react-dom/client";

const daysOfWeek = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];

const months = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const formattedHours = hours < 10 ? `0${hours}` : hours;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

const timer = (
  <div>
    {dayOfWeek}, {day} {month} {year}, godzina: {formattedHours}:
    {formattedMinutes}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(timer);

/*
Alterantywnie, możesz wyliczyć pojedynczy string i przekazać go do klamer:

const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}, godzina: ${hours}:${minutes}`;
...
const timer = (
    <div>
        {formattedDate}
    </div>
);
*/
