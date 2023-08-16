import React from "react";
import HomeContainer from "./containers/HomeContainer";

const App = () => {
  return (
    <div>
      <header>
        <h1>TMDB Movie App</h1>
      </header>
      <main>
        <HomeContainer />
      </main>
    </div>
  );
};

export default App;
