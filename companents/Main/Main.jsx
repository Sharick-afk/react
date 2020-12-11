import React from 'react'   
import s from './main.module.css'
import Myposts from './Myposts/Myposts'
import MyPage from './MyPage/MyPage';



function Main(props) {
  return (
    <main className={s.main}>
      <MyPage />
      <Myposts posts={props.posts} addPost={props.addPost} />
    </main>
  );
}

export default Main
