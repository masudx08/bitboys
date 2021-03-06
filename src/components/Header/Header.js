import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './header.css'
import MainLogo from '../../images/main-logo.png'
export default function Header() {
  return (
    <div className='headerC'>
      <Row className='inner'>
        <Col md={7}>
          <div>
            <h1 >The Center Of <br/> Your Cryptoverse</h1>
          </div>
          <div className='text-area'>
            <p>
              Kynno gets its name from the Old French and Greek word: “Kynosoura” which 
              literally means The Center of Attraction. Kynno will be the center of attraction 
              of everyone’s cryptoverse.
            </p>
            <p>
              A blockchain breaking the data silo paradigm. One unique platform connected 
              to all ecosystems and centralizing your web 3.0 identity, assets, data and legal 
              documents efficiently and securely.
            </p>
          </div>
          <div>
            <button className='btn1'>Invest in Pre-Seed</button>
            <button className='btn2'>View Video</button>
          </div>
        </Col>
        <Col md={5} className='hideInMobile'>
          <div className='main-logo'>
            <img src={MainLogo} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
