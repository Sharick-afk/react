import React from 'react'   
import { NavLink } from 'react-router-dom'
import Avatar from '../Main/Post/Person_info/Avatar/Avatar'
import s from './friend.module.css'


function FriendItem(props) {

  return (
    <div className={s.friend_item} >
      <Avatar className={s.friend_ava} />
      <NavLink className={s.friend_link} to={'/main/' + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
}

export default FriendItem

