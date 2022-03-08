import React from 'react'
import './FaqPage.css'
import FaqItems from './FaqItems'


const FaqPage = () => {
  return (
    <div>
    <div className='the_container'>
      <img src="/FAQ-Section-Background.png" alt="white background" style={{width: '100%', zIndex: 2}}/>
      <div className='centered_FAQ'>
        <h1 className='FAQ_title'>FAQ</h1>
        <FaqItems title="When is the mint?" description="Sample description"/>
        <FaqItems title="What is the mint price per token?" description="Sample description"/>
        <FaqItems title="Where can we view our nft?" description="Sample description"/>
        <FaqItems title="How many tokens are generated?" description="Sample description"/>
        <FaqItems title="When does staking unlock?" description="Sample description"/>
        <FaqItems title="What is the difference between a god and worshipper?" description="Sample description"/>      
      </div>
    </div>
    <div className='footer_div'>
      <h1 className='footer_title'>GOD GAME</h1>
      <div className='row'>
        <div className='column' style={{textAlign: 'right'}}>
          <img src="/dicscord-icon-purple.svg"  alt="discord" />
        </div>
        <div className='column' >
          <img src="/twitter-icon-blue.svg"  alt="twitter" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default FaqPage