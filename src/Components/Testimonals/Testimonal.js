import React, { useState } from 'react'
import './testimonal.css'
import {testimonialsData} from './TestimonialsData'
import leftarr from '../img/leftarr.png'
import rightarr from '../img/rightarr.png'

const Testimonal = () => {
    const [index,setIndex]=useState(0);
    const dataLength=testimonialsData.length;
  return (
    <>
        <div className="testimonials" id='testimonials'>
            <div className="testi-left">
                <span>Testimonials</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>
                <span>
                    {testimonialsData[index].review}
                </span>
                <span className='name-coach' >
                    {testimonialsData[index].name}
                
                <span style={{color:"green", fontWeight:"bold"}}>{" "}
                  - {testimonialsData[index].status}
                </span>
                </span>
            </div>
            <div className="testi-right">
            <div></div>
            <div></div>
                <img src={testimonialsData[index].image} alt="" />
            
            <div className="arrow">
                <img src={leftarr} 
                onClick={()=>{
                    index===0?setIndex(dataLength-1):setIndex( (prev)=>prev-1);
                }} alt="" />
                <img src={rightarr}
                onClick={()=>{
                    index===dataLength-1?setIndex(0):setIndex((prev)=>prev+1);
                }} alt="" />
            </div>
            </div>
        </div>
    </>
  )
}

export default Testimonal