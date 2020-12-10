import React from 'react'   
import s from './main.module.css'
import Myposts from './Myposts/Myposts'
import MyPage from './MyPage/MyPage';

function Main() {
  return (
    <main className={s.main}>
      <MyPage />
      <Myposts />

    </main>
  );
}

export default Main
