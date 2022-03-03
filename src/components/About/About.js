import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css'
export default function About() {
  return (
    <div className='aboutC'>
      <div>
        <h1 >Kynno Enterprise Grade <br /> Blockchain</h1>
      </div>
      <Row className='setbg'>
        <Col>
          <div>
            <p>
              Kynno is a revolutionary decentralized permissionless enterprise
              grade blockchain platform, built to support and operate secure, 
              compliant, and cutting-edge digital infrastructures.
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <p>
              Kynno is a revolutionary decentralized permissionless enterprise
              grade blockchain platform, built to support and operate secure, 
              compliant, and cutting-edge digital infrastructures.
            </p>
          </div>
          <div >
            <h4>What is the objective of the KYNNO blockchain?</h4>
            <p>
              Kynno’s main objective is to interface and communicate with other 
              blockchains and wallets to gather data on all your assets. This data
              is then sent to one centralized dashboard on your Kynno Data Hub
              to be analyzed, organized and displayed.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
