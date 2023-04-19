import React, { useState } from 'react';
import './header.css'
import logo from '../img/logo.png'
import bars from '../img/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile=window.innerWidth<=768?true:false;
  const [barsOpened,setBarsOpened]=useState(false);
  return (
    <>
      <div className="header">
     
      <img src={logo} alt="logo" className='logo-img' />
      <h2 className='gym-name' >My Transform</h2>
     {barsOpened===false && mobile===true ?( <div style={{padding:'0rem 2rem 0rem 0rem'}} 
     onClick={()=>setBarsOpened(true)}
     >
        <img src={bars} alt="bars"  style={{width:'2.5rem',height:'2.5rem',}}   />
      </div>):(  
        
         <ul className='main-menu'>
      <li>
      <Link   onClick={()=>setBarsOpened(false)}
      to='home'
      span={true}
      smooth={true}
      > Home</Link>
     </li>
      <li onClick={()=>setBarsOpened(false)}><Link  onClick={()=>setBarsOpened(false)}
      to='program'
      span={true}
      smooth={true}>Programs</Link>  </li>
      <li ><Link  onClick={()=>setBarsOpened(false)}  
      to='reasons'
      span={true}
      smooth={true} >Why_Us</Link>  </li>
      <li ><Link onClick={()=>setBarsOpened(false)}
      to='plans'
      span={true}
      smooth={true}>Plans</Link>  </li>
      <li ><Link onClick={()=>setBarsOpened(false)}
      to='testimonials'
      span={true}
      smooth={true}> Testimonials</Link></li>
    </ul>)}
     
   
  
  
 
  
     </div>
     </>
  
  );
};

export default Header