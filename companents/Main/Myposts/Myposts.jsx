import React from 'react'   
import Post from '../Post/Post'
import s from './myposts.module.css'


function Myposts(props) {

  let postsElement = props.posts
  .map( post => <Post message={post.message}key={post.key}likeCount={post.likeCount} />) 
  let textPostElement = React.createRef ()

  let addPost = () => {
    let text = textPostElement.current.value
    props.addPost(text)
    textPostElement.current.value = ''
  } 

  return (
    <div className={s.myposts}>
        {postsElement}
        <div className={s.cteate_post}>
        <textarea className={s.create_post_area} ref={textPostElement} placeholder='What"s new'>

        </textarea>
        <button onClick={addPost} className={s.addpost_btn}>Add post</button>
      </div>
    </div>
  );
}

export default Myposts
