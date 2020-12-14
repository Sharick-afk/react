import './index.css'
import reportWebVitals from './reportWebVitals'
import state, { subscribe } from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {addPost, addMessage, changeNewPostText } from './redux/state'

 let renderTreee = (state) =>{
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

renderTreee(state)
subscribe(renderTreee)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 