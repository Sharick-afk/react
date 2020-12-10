import React from 'react'  
import Logo from './Logo'  
import Search from './Search'   
import s from './header.module.css'


function Header() {
  return (
    <header className={s.header}>
      <div className={s.head_container}>
        <Logo />
        <Search />
      </div>
    </header>
  );
}

export default Header
