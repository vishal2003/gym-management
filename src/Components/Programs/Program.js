import React from 'react'
import './program.css'
import { programsData } from './ProgramData'
import arrow from'../img/arrow.png'

const Program = () => {
  return (
   <>
    <div className="program" id="program">
        <div className="program-heading">
            <span className='stroke_text-program'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke_text-program'>TO SHAPE YOU</span>
        </div>

        <div className="program-category">
        {programsData.map((programs)=>{
         return <div className="categories">
             {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details} </span>
            <div className="join-now">
            <span><b>Join Now</b> </span>
            <img src={arrow} alt="arrow"  className='arrow-img'/>
        </div>
          </div>
          
        })}

        </div>
       
    </div>
   </>
  )
}

export default Program