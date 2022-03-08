import React, {useState} from 'react'
import './FaqPage.css'

const FaqItems = (props) => {

  const [show, setShow] = useState(false)

  const detailedComponent = () => {

    if (show) {
      return (
        <div className='expanded-div layer2' >
          <p className='description_text' >{props.description}</p>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }





  return (
    <div style={{marginBottom: 20, width: '20%'}} className='container-row'>
      <div className='drop_down_box_hidden flex-container layer1'>
        <div className='flex-child'>
          <p>{props.title}</p>
        </div>
        <div className='flex-child' style={{width: 40}}>
          <h2 className='drop-button' onClick={() => setShow(!show)}>V</h2>
        </div>
      </div>
      {detailedComponent()}
    </div>
    )
}

export default FaqItems