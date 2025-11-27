import "./App.css";
import Candies from "./components/Candies.jsx";
import CandyCard from "./components/CandyCard.jsx";
import CandyList from "./components/CandyList.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import TopRated from "./components/TopRated.jsx";

function App() {
  const name = "Alyssa's ";

  return (
    <>
      <header>
        <h1>{name} TMDB Website </h1>
      </header>
      <Navbar />

      <main>
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/Popular" element = {<PopularList />} />
          <Route path = "/Top" element = {<TopRated />}/>
          <Route path = "/snack" element = {<CandyList />}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
