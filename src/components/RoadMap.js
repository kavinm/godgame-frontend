import React from "react";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div className="the_container">
      <img src="/Roadmap White Seciton.svg" alt="white background" />
      <div className="centered_roadmap">
        <h1>THE PHASES</h1>
        <div className="flex-container-roadmap">
          <div class="flex-child-roadmap">
            <div className="blue_box centered">
              <img
                src="/roadmap-greek-design2.svg"
                className="g-pattern-roadmap"
                alt="greed design G"
              />
              <h2>PHASE 1: Premint</h2>
              <div className="details-paragraph">
                <ul>
                  <li>Partnerships with other Projects</li>
                  <li>Discord Launch</li>
                  <li>Giveaways on Discord and Twitter</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex-child-roadmap">
            <div className="blue_box centered">
              <img
                src="/roadmap-greek-design2.svg"
                className="g-pattern-roadmap"
                alt="greed design G"
              />
              <h2>PHASE 2: Minting Live</h2>
              <div className="details-paragraph">
                <ul>
                  <li>MINT GOES LIVE</li>
                  <li>TofuNFT Listing</li>
                  <li>Metis Market Listing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container-roadmap">
          <div class="flex-child-roadmap">
            <div className="blue_box centered">
              <img
                src="/roadmap-greek-design2.svg"
                className="g-pattern-roadmap"
                alt="greed design G"
              />
              <h2>PHASE 3: First 2,222 Minted </h2>
              <div className="details-paragraph">
                <ul>
                  <li>Staking/Unstaking is enabled</li>
                  <li>Minting is now possible only with $$FAITH</li>
                  <li>Holder's will be rewarded</li>
                  <li>Stealing Mechanics are live</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex-child-roadmap">
            <div className="blue_box centered">
              <img
                src="/roadmap-greek-design2.svg"
                className="g-pattern-roadmap"
                alt="greed design G"
              />
              <h2>PHASE 4: Fully Minted</h2>
              <div className="details-paragraph">
                <ul>
                  <li>
                    All 10,000 gods/worshippers are minted and permanently
                    stored on the Metis
                  </li>
                  <li>Faith token generation stopped</li>

                  <li>
                   Supply is capped and ownership of contract is renounced
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
