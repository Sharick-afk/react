import React from 'react'
import ContactItem from './ContactItem/ContactItem'
import s from './dialogs.module.css'
import MessgaeItem from './Dialogs/MessageItem'
/* import { NavLink } from 'react-router-dom' */

let contactsData = [
  {id: 0, name:'Name1'},
  {id: 1, name:'Name2'},
  {id: 2, name:'Name3'},
  {id: 3, name:'Name4'},
  {id: 4, name:'Name5'},
  {id: 5, name:'Name6'},

]

let messagesData = [
  {id: 0, message:'Illum ipsam, quidem deleniti, distinctio sint'},
  {id: 1, message:'Illum ipsam, quidem deleniti, distinctio '},
  {id: 2, message:'Illum ipsam, quidem deleniti, sint'},
  {id: 3, message:'Illum ipsam, quidem distinctio sint'},
  {id: 4, message:'Illum ipsam, deleniti, distinctio sint'},
  {id: 5, message:'Illum quidem deleniti, distinctio sint'},
]

let contactElements = contactsData
.map( contact => <ContactItem name={contact.name}id={contact.id} />) 

let messageElements = messagesData
.map( message => <MessgaeItem message={message.message}id={message.id} />) 



const Dialogs = (props) =>{ 
  return ( 
  <main className={s.main}>
    <ul className={s.contacts_list}>
      {contactElements}
    </ul>
    <ul className={s.messages_list}>y
      {messageElements}
    </ul>
  </main>
          )
}
export default Dialogs