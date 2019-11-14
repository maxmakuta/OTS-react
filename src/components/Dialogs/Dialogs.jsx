/*
import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";


const Dialogs = (props) => {

    let messagesElement = props.messagesPage.map((m, key) => <Message message={m.id + m.body} name={m.id} id={m.id}
                                                                               key={key}/>);





    const addNewMessage = (values) => {
        props.addMessage(values.newMessageElement)
    }
    return (
        <div className={s.dialogs}>

            <div>
                <div className={s.messages}>
                    {messagesElement}
                </div>

            </div>
        </div>
    )
}

export default Dialogs;*/
