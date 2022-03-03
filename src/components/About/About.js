import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css'

export default function About() {
  return (
    <div>
      <div>
        <h1>Kynno Enterprise Grade </h1>
        <h1>Blockchain </h1>
      </div>
      <Row>
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
          <div>
            <h3>What is the objective of the KYNNO blockchain?</h3>
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
