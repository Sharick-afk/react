import React from 'react'
import PersonName from './PersoneName/PersoneName'
import s from './personeinfo.module.css'
import Avatar from './Avatar/Avatar'

function PersonInfo(props) {
  return (
    <div className={s.persone_info}>
      <Avatar />
      <PersonName name={props.name} />
    </div>
  );
}

export default PersonInfo
