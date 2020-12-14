import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addPost, addMessage, changeNewPostText } from './redux/state'

export let renderTreee = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App  state={state}
            changeNewPostText={changeNewPostText}
            addPost={addPost} 
            addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}
