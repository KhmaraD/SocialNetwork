import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img} key={d.id} />)
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;