import React from 'react'
import s from './contact.module.css'
import { NavLink } from 'react-router-dom'
import Avatar from '../../Main/Post/Person_info/Avatar'


const ContactItem = (props) =>{ 
  return ( 
    <li className={s.contact_item} activeClassName='active'>
      <Avatar />
      <NavLink className={s.contact_link} to={'/dialogs/' + props.id}>
        {props.name}
      </NavLink>
    </li>
          )
}
 
export default ContactItem