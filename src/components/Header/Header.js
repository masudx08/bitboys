import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './header.css'
import MainLogo from '../../images/main-logo.png'
export default function Header() {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <h1>The Center Of</h1>
            <h1>Your Cryptoverse</h1>
          </div>
          <div>
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
            <button>Invest in Pre-Seed</button>
            <button>View Video</button>
          </div>
        </Col>
        <Col>
          <div>
            <img src={MainLogo} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
