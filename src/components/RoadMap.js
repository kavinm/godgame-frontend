import React from 'react'
import './RoadMap.css'

const RoadMap = () => {
  return (
    <div className='the_container'>
      <img src="/Roadmap White Seciton.svg" alt="white background"/>
      <div className='centered_roadmap'>
        <h1>THE ROADMAP</h1>
        <div className='flex-container-roadmap'>
          <div class="flex-child-roadmap">
            <div className='blue_box centered'>
              <img src="/roadmap-greek-design2.svg" className="g-pattern-roadmap" alt="greed design G" />
              <h2>PHASE 1</h2>
              <div className='details-paragraph'>
                <p>Project Partnerships</p>
                <p>Discord Launch</p>
                <p>MINT GOES LIVE</p>
              </div>
            
            </div>
          </div>
          <div class="flex-child-roadmap">
            <div className='blue_box centered'>
              <img src="/roadmap-greek-design2.svg" className="g-pattern-roadmap" alt="greed design G" />
              <h2>PHASE 2</h2>
              <div className='details-paragraph'>
                <p>Project Partnerships</p>
                <p>Discord Launch</p>
                <p>MINT GOES LIVE</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-container-roadmap'>
          <div class="flex-child-roadmap">
            <div className='blue_box centered'>
              <img src="/roadmap-greek-design2.svg" className="g-pattern-roadmap" alt="greed design G" />
              <h2>PHASE 3</h2>
              <div className='details-paragraph'>
                <p>Staking/Unstaking goes live</p>
                <p>You can mint only with $FAITH</p>
                <p>Stealing Mechanics enabled</p>
              </div>
            </div>
          </div>
          <div class="flex-child-roadmap">
            <div className='blue_box centered'>
              <img src="/roadmap-greek-design2.svg" className="g-pattern-roadmap" alt="greed design G" />
              <h2>PHASE 4</h2>
              <div className='details-paragraph'>
                <p>Faith token generation stopped</p>
                <p>Staking/unstaking stopped</p>
                <p>Faith becomes a meme token with no utility, <br/> supply is capped</p>
                <p>All 10,000 minted gods/worshippers are on Metis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadMap