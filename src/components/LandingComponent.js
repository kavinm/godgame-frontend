import React from 'react'
import './LandingComponent.css'
import bootstrap from 'bootstrap'

const LandingComponent = () => {
  return (
    <div>
      <div class="the_container">
        <img src="./Hero_Background.png" alt="Background" style={{width: '100%', zIndex: 2}}/>
        <div className="centered">
          <h1 className='main_title'>GOD GAME</h1>
          <p className='subtitle'>God Game is an NFT project launched on <br/>the METIS Blockchain. Now Minting</p>
          <div class="flex-container">

            <div class="flex-child number_of_mints">
              200 Minted
            </div>
            <div class="flex-child green">
              <div className='container_row'>
                <div className='layer1'>
                  <svg width="277" height="45" viewBox="0 0 277 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 6V0H262.5V6H270.5V16H277V29H270.5V39H262.5V45H15.5V39H8V28.5H0V15.5H8V6H15.5Z" fill="#FFC545"/>
                  </svg>
                </div>
                <div className='layer2'>
                  <a className='connect_to_wallet' >Connect Wallet/Mint</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="./God_on_Pillar.png" className='pillar' alt="Background"/>
      </div>
    </div>
  )
}

export default LandingComponent