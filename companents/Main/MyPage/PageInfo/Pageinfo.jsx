import React from 'react'   
import s from './pageinfo.module.css'

function Pageinfo(props) {
  return (
    <div className={s.info_block}>
      <div className={s.name}>
        {props.name}
      </div>
      <div className={s.info}>
        {props.male}  <br/>
        {props.age}
      </div>
    </div>
  );
}

export default Pageinfo
