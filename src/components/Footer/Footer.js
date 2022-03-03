import React from 'react'
import './footer.css'
import Logo from '../../images/logo.png'
import Twitter from '../../images/twitter.png'
import Medium from '../../images/medium.png'
import Github from '../../images/github.png'
import Discord from '../../images/discord.png'
export default function Footer() {
  return (
    <div className='d-flex'>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <p>Copyright © KYNNO - 2022</p>
      </div>
      <div>
        <img src={Twitter} alt="" />
        <img src={Medium} alt="" />
        <img src={Github} alt="" />
        <img src={Discord} alt="" />
      </div>
    </div>
  )
}
