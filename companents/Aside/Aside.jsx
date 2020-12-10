import React from 'react'  
import Navbar from './Navbar'
import s from './aside.module.css'

function Aside() {
  return (
    <aside className={s.aside}>
      <Navbar />
    </aside>
  );
}

export default Aside
