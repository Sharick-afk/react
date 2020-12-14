import React from 'react'   
import s from './main.module.css'
import Myposts from './Myposts/Myposts'
import MyPage from './MyPage/MyPage';



function Main(props) {
  return (
    <main className={s.main}>
      <MyPage />
      <Myposts newPostText={props.newPostText} 
               posts={props.posts}
               changeNewPostText={props.changeNewPostText}
               addPost={props.addPost} />
    </main>
  );
}

export default Main
