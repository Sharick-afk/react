import React from 'react'
import ContactItem from './ContactItem/ContactItem'
import s from './dialogs.module.css'
import MessgaeItem from './Dialogs/MessageItem'





const Dialogs = (props) =>{ 

  let contactElements = props.contacts.map( contact => <ContactItem name={contact.name} id={contact.id} />) 
  let messageElements = props.messages.map( message => <MessgaeItem message={message.message} id={message.id} />) 

  let messageText = React.createRef ()

  let addMessage = () => {
    let message = messageText.current.value
    props.addMessage(message)
    messageText.current.value = ''
  }


  return ( 
  <main className={s.main}>
    <ul className={s.contacts_list}>
      {contactElements}
    </ul>
    <div className={s.box}>
    <ul className={s.messages_list}>
      {messageElements}

    </ul>
    <div className={s.message_send_box}>
        <textarea  ref={messageText} className={s.new_message} placeholder='Message...'></textarea>
        <button onClick={addMessage} className={s.send_message_btn}>
          Send
        </button>
      </div>
      </div>
  </main>
          )
}
export default Dialogs