import React from 'react'
import './partners.css'
import Partner1 from '../../images/partner-img.png'
import { Col, Row } from 'react-bootstrap'
export default function Partners() {
  const partners = [
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
    {img: Partner1},
  ]
  return (
    <div>
      <div>
        <h1>Kynno Partners</h1>
      </div>
      <Row>
        {
          partners.map(partner=>{
            return (
              <Col md={4}>
                <div>
                  <img src={partner.img} alt="" />
                </div>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
