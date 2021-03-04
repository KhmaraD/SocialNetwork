import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import style from "../Dialogs.module.css"

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody"
                       placeholder="Enter your message"
                       className={style.form} />
            </div>
            <div>
                <button className={style.messageFormBtn}>Send message</button>
            </div>
        </form>
    );
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
