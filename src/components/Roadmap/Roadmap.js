import React from 'react'
import CustomSlider from '../_common/Slider/CustomSlider'
import './roadmap.css'
export default function Roadmap() {
  return (
    <div className='roadmapC'>
     <div className="inner">
      <div className='text-area'>
          <h1>Kynno’s Roadmap</h1>
          <p>A solid strategy for a strong result</p>
        </div>
        <div>
          <CustomSlider desktop={3} tab={2} mobile={1}/>
        </div>
     </div>
    </div>
  )
}
