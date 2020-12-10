import React from 'react'
import s from './avatar.module.css'

function Avatar() {
  return ( 
    <div className={s.avatar_box}>
      <a href="/" className={s.avatar_link}>
        <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png" alt="persons avatar" className={s.avatar_img}/>
        </a>
    </div>

  );
}

export default  Avatar
