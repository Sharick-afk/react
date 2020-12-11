import React from 'react'
import s from './personename.module.css'

function PersonName(props) {
  return (
    <div className={s.person_name}>
      <a href="/" className={s.person_name_link}>
      { props.name }
      </a>
    </div>
  );
}

export default PersonName
