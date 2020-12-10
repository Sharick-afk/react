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



function App() {
  return (
          <BrowserRouter>
            <Header />
            <div className={s.container}>
                <Aside />
                <div className={s.main}>
                  <Route path='/main' component={Main}/>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/news' component={News}/>
                  <Route path='/settings' component={Settings}/>
                  <Route path='/music' component={Music}/>
                </div>
            </div>
          </BrowserRouter>
  );
}

export default App
