import React from 'react'
import './customSlider.css'
import Line from '../../../images/line.png'
export default function CustomSlider() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11, 12]
  return (
    <div className='slider-container'>
      
      {
          arr.map(item=>{
            return (
              <div className='sliderC'>
              <div key={item}>
                <div>
                  <img src={Line} alt="" />
                </div>
                <h4>All-in-one Crypto Tracker</h4>
                <p>
                  All your assets and transactions accessible at a glance
                  spread across wallets, blockchains and marketplaces.
                </p>
                <h5>
                  Live Cryptofolio and Transaction History: 
                </h5>
                <p>
                  Real Time visibility of all your assets in one dashboard. 
                  Search, view and filter all your past transactions. 
                </p>
                <h5>
                  Alerts: 
                </h5>
                <p>
                  Get Alerts when new interesting assets are available, 
                  when an asset is in a buy or sell zone or a market trend
                  is shifting.
                </p>
                </div>
                </div>
            )
          })
        }
        
    </div>
  )
}
