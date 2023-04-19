import React from 'react'
import { plansData } from './PlanData'
import './plans.css'
import whitetick from '../img/whitetick.png'



const Plans = () => {
  return (
    <div className='plan-container' id='plans'>
    <div className="paln-header">
        <span className='stroke-text' >READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className='stroke-text'> NOW WITHUS.</span>
    </div>
     
     {/* different plans */}
    <div className="plans">
        {plansData.map((plan,i)=>{
return <div className="diff-plans" key={i}>
    {plan.icon}
    <span>{plan.name} </span>
    <span>$ {plan.price} </span>

    <div className="features">
        {plan.features.map((feature,i)=>{
return <div className="feature" key={i}>
    <img src={whitetick} alt="whitetick" style={{width:"1rem"}} />
    <span key={i}>{feature} </span>
</div>
        })}
    </div>
<div>
    <span>See More Benifits </span>
</div>
<button className="btn">Join Now</button>

</div>
        })}
    </div>

    </div>
  )
}

export default Plans
