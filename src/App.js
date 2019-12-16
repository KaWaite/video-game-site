import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar.js";
import Articles from "./Components/Articles";
import UpcomingGames from "./Components/UpcomingGames";
import Middle from "./Components/Middle";

// import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <UpcomingGames />
        <Articles />
        <Middle />
        {/* <Newsletter className="newsletter" /> */}
      </div>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You are beautiful.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
