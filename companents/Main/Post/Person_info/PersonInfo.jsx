import React from 'react'
import Avatar from './Avatar'
import PersonName from './PersoneName'
import s from './personeinfo.module.css'

function PersonInfo(props) {
  return (
    <div className={s.persone_info}>
      <Avatar  />
      <PersonName name={props.name} />
    </div>
  );
}

export default PersonInfo
