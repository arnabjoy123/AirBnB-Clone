import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import Card from "./components/card/card.jsx";
import data from "./data.js";

function App() {
  const cards = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cardslist">{cards}</div>
    </>
  );
}

export default App;
