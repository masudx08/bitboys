import React from 'react'
import './customSlider.css'
import Line from '../../../images/line.png'
export default function CustomSlider() {
  return (
    <div className='sliderC'>
      <div>
        <img src={Line} alt="" />
      </div>
      <h4>All-in-one Crypto Tracker</h4>
      <p>
        All your assets and transactions accessible at a glance
        spread across wallets, blockchains and marketplaces.
      </p>
      <b>
        Live Cryptofolio and Transaction History: 
      </b>
      <p>
        Real Time visibility of all your assets in one dashboard. 
        Search, view and filter all your past transactions. 
      </p>
      <h4>
        Alerts: 
      </h4>
      <p>
        Get Alerts when new interesting assets are available, 
        when an asset is in a buy or sell zone or a market trend
        is shifting.
      </p>
    </div>
  )
}
