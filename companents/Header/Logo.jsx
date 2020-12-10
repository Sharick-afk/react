import React from 'react';    
import { NavLink } from 'react-router-dom';
import s from './header.module.css'

function Logo() {
  return (
    <NavLink to="/Main" className={s.logo_link}>
      <img 
      src="https://hctraktor.org/local/templates/hctraktor/img/logo.svg?v3" 
       alt="logotype" 
       className={s.logo_img}/>
    </NavLink>
  );
}

export default Logo;
