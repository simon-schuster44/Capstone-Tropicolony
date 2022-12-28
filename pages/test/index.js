import {useEffect, useState} from "react";

export default function Test() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/cards");
      const data = await response.json();
      setCards(data);
    }
    fetchData();
  }, []);
  console.log(cards);

  return (
    <>
      <h1>These are the Cards:</h1>
      {cards.map((card, index) => {
        return (
          <div key={index}>
            <h2>{card.name}</h2>
            <p>{card.description}</p>
          </div>
        );
      })}
    </>
  );
}
