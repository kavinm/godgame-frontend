import React from "react";
import "./AboutComponent.css";

const AboutComponent = () => {
  return (
    <div class="the_container">
      <img src="/About_Section_Background.svg" alt="background" />
      <div className="centered">
        <h1 className="collect_faith">COLLECT $ FAITH</h1>
        <div class="flex-container-about">
          <div class="flex-child-about steak_unsteak">
            <p>STAKE</p>
            <div className="black_box">
              <p>Coming Soon</p>
            </div>
          </div>
          <div class="flex-child-about steak_unsteak">
            <p>Unstake</p>
            <div className="black_box">
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="centered about-section">
        <div class="second-flex-container-about">
          <div class="second-flex-child-about">
            <div className="about-text-card">
              <h3>ABOUT</h3>
              <h2 class="black">
                THE FIRST COMPLETELY ON-CHAIN <br /> NFT COLLECTION ON METIS
              </h2>
              <p>
                God Game is the first NFT project on Metis to store all
                metadata, including the image, on chain.
              </p>
            </div>
          </div>
          <div class="second-flex-child-about">
            <div className="teal_box">
              <img src="/armour 2.png" alt="background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
