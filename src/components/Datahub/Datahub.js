import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './datahub.css'

export default function Datahub() {
  return (
    <div className='datahubC'>
      <Row>
        <Col>
          <h1>Kynno Data Hub</h1>
        </Col>
        <Col>
          <div>
            <b>
              Kynno is a revolutionary decentralized permissionless enterprise
              grade blockchain platform, built to support and operate secure, 
              compliant, and cutting-edge digital infrastructures.
            </b>
          </div>
          <div>
            <h1 style={{background:'red'}}>Slider</h1>
          </div>
        </Col>
      </Row>
      <div>
        <h3>A myriad of assets and information</h3>
        <div>
          <b>
            Accurately tracking cryptocurrency and NFT assets investment performance and taxes is hard. Indeed, we are 
            all handling tens if not hundreds of tokens and NFTs on several platforms and ecosystems and having to use 
            spreadsheets or even paper to keep track of everything.
          </b>
        </div>
        <div>
          <b>
            And it gets even worse when you want to declare your taxes! In such a volatile market, being able to make the 
            right decision fast is the key to a successful investment strategy.
          </b>
        </div>
      </div>
    </div>
  )
}
