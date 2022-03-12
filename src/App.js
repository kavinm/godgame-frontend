import NavBar from "./components/NavBar";
import LandingComponent from "./components/LandingComponent";
import AboutComponent from "./components/AboutComponent";
import SampleMints from "./components/SampleMints";
import RoadMap from "./components/RoadMap";
import FaqPage from "./components/FaqPage";
import * as React from "react";


function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path="/whitepaper">
        </Route>
        <Whitepaper />
      <LandingComponent/>
      <AboutComponent/>
      <SampleMints/>
      <RoadMap/>
      <FaqPage/>
    </div>
  );
}

export default App;
