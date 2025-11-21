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
  const name = "Your Mom";

  return (
    <>
      <header>
        <h1>Candy Listing For {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo
          cumque sit dignissimos, consectetur nemo possimus accusamus maxime
          excepturi molestiae nesciunt, laborum corrupti quis asperiores!
        </p>
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
