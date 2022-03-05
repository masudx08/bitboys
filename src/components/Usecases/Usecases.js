import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomSlider from '../_common/Slider/CustomSlider'
import './usecases.css'

export default function Usecases() {
  return (
    <div className='useCasesC' id='usecases'>
      <div className='inner'>
        <div>
          <h1>Kynno’s ‍Use-Cases</h1>
        </div>
        <div className='right'>
          <div className="rightInner">
            <div className='text-area'>
              <p>
                Web3 is the third generation internet, based on new technologies like Blockchain and metaverse. Its main advantage is decentralization, unlike the current web dominated by GAFAM.
              </p>
              <p>
                The metaverse refers to the future of the Internet: a virtual reality world in which users can interact. This concept is developing at a lightning speed, and the technology giants are investing massively. This is why KYNNO was born.
              </p>
            </div>
            <div>
              <CustomSlider desktop={1} mobile={1}/>
            </div>

          </div>
        </div>
        <div className='bottom'>
              <h3>We’re On A Mission To Democratize Cryptocurrency</h3>
              <div>
                <p>
                  With 30+ years of combined experience in the development of cutting-edge, <br/>
                  solutions of which 10 years in Blockchain Technologies and 10+ years of  <br/>
                  entrepreneurship and successful business building, we have the skills  <br/>
                  to launch a blue-chip product that will take-over the market.
                </p>
              </div>
            </div>
      </div>
    </div>
  )
}
