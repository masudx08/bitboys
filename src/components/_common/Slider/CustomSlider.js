import React from 'react'
import './customSlider.css'
import Line from '../../../images/line.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function CustomSlider({desktop, mobile}) {
  console.log(mobile, desktop)
  const arr = [1,2,3,4,5,6,7,8,9,10,11, 12]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: desktop
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobile
    }
  };
  return (
    <div>
       <Carousel responsive={responsive}>
       {
          arr.map((item, index)=>{
            return (
              <div key={index} className="slider-container">
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
              </div>
            )
          })
        }
      </Carousel>
     
        
    </div>
  )
}
