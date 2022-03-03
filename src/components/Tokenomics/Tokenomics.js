import React from 'react'
import './tokenomics.css'
import TokeImg from '../../images/tokenomics-img.png'
import Toke2Img from '../../images/tokenomics-2.png'
export default function Tokenomics() {
  return (
    <div className='tokenomicsC'>
      <div>
        <h1>$KYN Tokenomics</h1>
      </div>
      <div className='setbg toke1'>
        <img src={TokeImg} alt="" />
      </div>
      <div className='toke2'>
        <img src={Toke2Img} alt="" />
      </div>

    </div>
  )
}
