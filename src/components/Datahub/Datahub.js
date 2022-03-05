import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomSlider from '../_common/Slider/CustomSlider'
import './datahub.css'

export default function Datahub() {
  return (
    <div className='datahubC' id='whitepaper'>
      <div className='inner'>
        <div>
          <h1>Kynno Data Hub</h1>
        </div>
        <div className='right'>
          <div className="rightInner">
            <div className='text-area'>
              <p>
                Kynno is a revolutionary decentralized permissionless enterprise
                grade blockchain platform, built to support and operate secure,
                compliant, and cutting-edge digital infrastructures.
              </p>
            </div>
            <div>
              <CustomSlider  desktop={1} tab={1} mobile={1}/>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <h3>A myriad of assets and information</h3>
          <div>
            <p>
              Accurately tracking cryptocurrency and NFT assets investment performance and taxes is hard. Indeed, we are 
              all handling tens if not hundreds of tokens and NFTs on several platforms and ecosystems and having to use 
              spreadsheets or even paper to keep track of everything.
            </p>
          </div>
          <div>
            <p>
              And it gets even worse when you want to declare your taxes! In such a volatile market, being able to make the 
              right decision fast is the key to a successful investment strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
