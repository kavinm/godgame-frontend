import React from "react";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div className="the_container">
      <img src="/Roadmap White Seciton.svg" alt="white background" />
      <div className="centered_roadmap">
        <h1>THE ROADMAP</h1>
        <div className="flex-container-roadmap">
          <div class="flex-child-roadmap">
            <div className="blue_box centered">
              <img
                src="/roadmap-greek-design2.svg"
                className="g-pattern-roadmap"
                alt="greed design G"
              />
              <h2>PHASE 1</h2>
              <div className="details-paragraph">
                <ul>
                  <li>Partnerships with other Projects</li>
                  <li>Discord Launch</li>
                  <li></li>
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
              <h2>PHASE 2</h2>
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
              <h2>PHASE 3</h2>
              <div className="details-paragraph">
                <ul>
                  <li>Staking/Unstaking is enabled</li>
                  <li>Minting is now possible only with $$FAITH</li>
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
              <h2>PHASE 4</h2>
              <div className="details-paragraph">
                <ul>
                  <li>
                    All 10,000 gods/worshippers are minted and permanently
                    stored on the Metis
                  </li>
                  <li>Faith token generation stopped</li>

                  <li>
                    Faith becomes a meme token with no utility, <br /> supply is
                    capped and ownership of contract is renounced
                  </li>

                  <li>All 10,000 minted gods/worshippers are on Metis</li>
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
