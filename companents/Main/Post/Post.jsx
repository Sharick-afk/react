import React from 'react'
import PersonInfo from './Person_info/PersonInfo'
import s from './post.module.css'

function Post(props) {
  return (
    <section className={s.post}>
      <PersonInfo name='Name1'/>
      <div className={s.post_message}>
        {props.message}
      </div>
      <span className={s.like_box}>
        {props.likeCount}
      </span>
      <span className={s.hide} >{props.index}</span>
    </section>
  );
}

export default Post
