import NavBar from "./components/NavBar";

import LandingComponent from "./components/LandingComponent";
import AboutComponent from "./components/AboutComponent";
import SampleMints from "./components/SampleMints";
import RoadMap from "./components/RoadMap";
import Whitepaper from "./components/Whitepaper"
import FaqPage from "./components/FaqPage";
import Whitepaper from "./components/Whitepaper";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/whitepaper">
              {" "}
              <Whitepaper />
            </Route>
          </Switch>

          <LandingComponent />
          <AboutComponent />
          <SampleMints />
          <RoadMap />
          <FaqPage />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
