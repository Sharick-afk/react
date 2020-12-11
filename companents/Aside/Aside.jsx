import React from 'react'  
import Navbar from './Navbar'
import s from './aside.module.css'
import FriendItem from '../Friends/FriendItem'

function Aside(props) {

  let friendsEmelents = props.friends.map( inf => <FriendItem  className='friend_item'id={inf.id}  key={inf.key} name={inf.name} />) 

  return (
    <aside className={s.aside}>
      <Navbar />
      <div className='s.friend_box'>
        {friendsEmelents}
      </div>
    </aside>
  );
}

export default Aside
