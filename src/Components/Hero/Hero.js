import React from 'react'
import Header from '../Header/Header'
import './hero.css'
import heart from '../img/heart.png'
import hero from '../img/hero.png'
import hero_image_back from '../img/hero_image_back.png'
import calory from '../img/calory.png'


const Hero = () => {
  return (
    <>
      <div className="hero" id='home'>
        <div className="hero-left">

          {/* this is menus */}
          <Header />

          {/* gyn title */}
          <div className="title-add">
            <div></div>
            <strong>The Best Body Transform Club In This City.</strong>
          </div>

          {/* gym guy title */}

          <div className="gym-guy-title">
            <div>
              <span className='stroke_text'>SHAPE</span>
              <span> YOUR</span>
            </div>

            <div>
              <span>IDEAL BODY</span>
            </div>
            <div>
              <span>
              If you want something you've never had, you must be willing to do something you've never done.
              </span>
            </div>
          </div>

          {/* club information */}
          <div className="club-information">
            <div>
              <span>+ 140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+ 1000</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+ 60</span>
              <span>FITNESS PROGRAMS COACHES</span>
            </div>
          </div>

          {/* gym buttons */}
          <div className="gym-left-btn">
            <button className='btn'>Start Here</button>
            <button className='btn'>Learn Here</button>
          </div>
        </div>


        <div className="hero-right">
       <button className="btn">Join Now</button>

       <div className="heart-rate">
        <img src={heart} alt="heart"  />
        
        <span>Heart Rate</span>
        <span>116 bpm</span>
       </div>
       <img src={hero} alt="hero" className='hero-img'/>
       <img src={hero_image_back} alt="wave" className='hero-back' />

       {/* calories */}
       <div className="calory">
        <img src={calory} alt="calory" className='calories' />
        <div className="calory-burn">
          <span>Carolies Burned</span>
          <span>220 kcal</span>
        </div>
       </div>
        </div>

        
      </div>
    </>
  )
}

export default Hero