import React from 'react'   
import Post from '../Post/Post'
import s from './myposts.module.css'


function Myposts() {

  let postData = [
    {id: 0,likeCount:5, message:'Lorem ipsum, dolor sit amet consectetur'},
    {id: 1,likeCount:52, message:'Illum ipsam, quidem deleniti, distinctio sint'},
    {id: 2,likeCount:11, message:'Molestiae labore voluptates modi minus mollitia'},
    {id: 3,likeCount:7, message:'fugit eligendi odit fugiat '},
    {id: 4,likeCount:13, message:'quia quae numquam est perferendis'},
    {id: 5,likeCount:6, message:'bаавы fsd'}
  ]

  let postsElement = postData
  .map( post => <Post message={post.message}likeCount={post.likeCount} />) 

  return (
    <div className={s.myposts}>
        {postsElement}
    </div>
  );
}

export default Myposts
