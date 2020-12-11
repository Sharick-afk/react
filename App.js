import React from 'react'  
import Header from './companents/Header/Header' 
import Aside from './companents/Aside/Aside'
import Main from './companents/Main/Main'
import Music from './companents/Music/Music'
import News from './companents/News/News'
import Settings from './companents/Settings/Settings'
import  s from './App.module.css'
import Dialogs from './companents/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'



function App(props) {
return (
  <BrowserRouter>
    <Header />
    <div className={s.container}>
        <Aside friends={props.state.friends}/>
        <div className={s.main}>
          <Route path='/main'render={ () => <Main addPost={props.addPost} posts={props.state.posts} avatars={props.state.avatars} />} />
          <Route path='/dialogs' render={ () => <Dialogs avatars={props.state.avatars}messages={props.state.messages}contacts={props.state.contacts} />}/>
          <Route path='/news' render={News}/>
          <Route path='/settings' render={Settings}/>
          <Route path='/music' render={Music}/>
        </div>
    </div>
  </BrowserRouter>
);

}

export default App
