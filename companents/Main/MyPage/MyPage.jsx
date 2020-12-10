import React from 'react'   
import s from './mypage.module.css'
import Pageinfo from './PageInfo/Pageinfo'

function MyPage() {
  return (
    <div className={s.mypage}>
      <div className={s.bgr_container} >
      <img src="https://images.wallpapersden.com/image/download/iphone-11-pro-dark_a2tsbWaUmZqaraWkpJRobWllrWdma2U.jpg" alt="background" className={s.background}/>
      <Pageinfo name='John Doe' male='male' age='21' />
      </div>
    </div>
  );
}

export default MyPage
