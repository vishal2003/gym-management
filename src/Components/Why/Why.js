import React from 'react'
import './why.css'
import builder1 from '../img/builder1.png'
import builder2 from '../img/builder2.jpg'
import builder3 from '../img/builder3.jpg'
import builder4 from '../img/builder4.png'
import tick from '../img/tick.png'
import brand1 from '../img/brand1.png'
import brand2 from '../img/brand2.png'
import brand3 from '../img/brand3.png'
import brand4 from '../img/brand4.png'

const Why = () => {
  return (
   <div className="reason" id="reasons">
    <div className="reason-left">
     <img src={builder3} alt="build" />
     <img src={builder1} alt="build" />
     <img src={builder2} alt="build" />
     <img src={builder4}  alt="build"/>
    </div>

    <div className="reason-right">
     <span>Some Reasons</span>
     <div>
     <span className='stroke_text-program'>WHY</span>
     <span> JOIN HERE?</span>
     </div>


     <div className="reason-details">
      <div>
      <img src={tick}  className='tick-img'  alt='tick'/>
      <span>OVER 140+ EXPERT COACHES. </span>
      </div>
      <div>
      <img src={tick} className='tick-img' alt='tick'/>
      <span> TRAIN SMARTER AND FASTER THAN BEFORE.</span>
      </div>
      <div>
      <img src={tick}  className='tick-img' alt='tick'/>
      <span>1 FREE PROGRAM FOR NEW MEMBER.</span>
      </div>
      <div>
      <img src={tick}  className='tick-img' alt='tick'/>
      <span>RELIABLE PARTNERS. </span>
      </div>
     </div>
     <span className="partners" style={{
      color:"gray", fontWeight:'normal', paddingBottom:"1.5rem"
     }}>
      OUR PARTNERS
     </span>
     <div className="partenrs-img">
     <img src={brand1} alt='brand'/>
     <img src={brand2} alt='brand'/>
     <img src={brand3} alt='brand'/>
     <img src={brand4} alt='brand'/>
     </div>
    </div>
   </div>
  )
}

export default Why