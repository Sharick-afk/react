import React from 'react' 
import s from './aside.module.css'
import c from '../Common/common.module.css'
import { NavLink } from "react-router-dom"


function Navbar() {
  return (
    <nav className={s.navbar}>
      <ul className={s.nav_list}>
        <li className={s.nav_list_item}>
          <NavLink to="/main" activeClassName={s.active} className={` ${s.nav_item_link} ${c.link}`}>
            Main
          </NavLink>
          </li>
          <li className={s.nav_list_item}>
          <NavLink to="/dialogs"activeClassName={s.active} className={`${s.nav_item_link} ${c.link}`}>
            Messages
          </NavLink>
          </li>
          <li className={s.nav_list_item}>
          <NavLink to="/news"activeClassName={s.active} className={`${s.nav_item_link} ${c.link}`}>
            News
          </NavLink>
          </li>
          <li className={s.nav_list_item}>
          <NavLink to="/music"activeClassName={s.active} className={`${s.nav_item_link} ${c.link}`}>
            Music
          </NavLink>
          </li>
          <li className={s.nav_list_item}>
          <NavLink to="/settings"activeClassName={s.active} className={`${s.nav_item_link} ${c.link}`}>
            Settings
          </NavLink>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar
