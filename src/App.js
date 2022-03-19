import NavBar from "./components/NavBar";

import LandingComponent from "./components/LandingComponent";
import AboutComponent from "./components/AboutComponent";
import SampleMints from "./components/SampleMints";
import RoadMap from "./components/RoadMap";

import FaqPage from "./components/FaqPage";
import DisplayNFT from "./components/DisplayNFT";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    console.log(isWalletConnected);
  }, [isWalletConnected]);

  return (
    <div>
      <BrowserRouter> 
      <div>

        <NavBar stateChanger={setIsWalletConnected} />

         <Switch>
            <Route exact path="/displaynft">
              <DisplayNFT/>
            </Route>
          </Switch> 
          <Switch>
            <Route exact path ="/faq">
            <FaqPage />
            </Route>
          </Switch> 
        <Route exact path = "/">
          <LandingComponent isWalletConnected={isWalletConnected} />
          <AboutComponent/>
        <SampleMints />
        <RoadMap />
        <FaqPage />
        </Route>
      </div>
     </BrowserRouter> 
    </div>
  );
}

export default App;
