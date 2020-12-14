import React from 'react'   
import Post from '../Post/Post'
import s from './myposts.module.css'


function Myposts(props) {

  let postsElement = props.posts
  .map( post => <Post message={post.message}
                      key={post.key}
                      likeCount={post.likeCount} />) 

  let textPostElement = React.createRef ()
  let addPost = () => {
    props.addPost()
  } 

  let onChangePost = () => {
    let newText = textPostElement.current.value
    props.changeNewPostText(newText)

  }
  return (
    <div className={s.myposts}>
        {postsElement}
        <div className={s.cteate_post}>
        <textarea  onChange={onChangePost}
                   className={s.create_post_area} 
                   ref={textPostElement} 
                   placeholder='What"s new' 
                   value={props.newPostText} />

        <button onClick={addPost} 
                className={s.addpost_btn}>Add post</button>
      </div>
    </div>
  );
}

export default Myposts
