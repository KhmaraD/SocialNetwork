import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import styleForm from "../common/FormsControls/FormsControls.module.css";
import style from "./Login.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            {/*<div>*/}
            {/*    <Field placeholder={"Email"}*/}
            {/*           name={"email"}*/}
            {/*           component={Input}*/}
            {/*           validate={required}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field placeholder={"Password"}*/}
            {/*           name={"password"}*/}
            {/*           component={Input}*/}
            {/*           validate={required}*/}
            {/*           type={"password"}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field component={Input}*/}
            {/*           name={"rememberMe"}*/}
            {/*           type={"checkbox"}/>remember me*/}
            {/*</div>*/}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}

            { error && <div className={styleForm.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
            <div className={style.testAccData}>
                <div>Test account data:</div>
                <div>Email: free@samuraijs.com</div>
                <div>Password: free</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);