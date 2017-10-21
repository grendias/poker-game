import React from 'react';
import './LoginForm.css';

const LoginForm = ({ onSubmit, onSignup, onPasswordChange, onUsernameChange }) => {
    return <form className="login-form">
            <div className="login-form_section">
                <label className="login-form_section_username-label" for="login-form_username">Username:</label>
                <input onChange={(value) => onUsernameChange(value)} id="login-form_username" className="login-container_username-input"></input>
            </div>
            <div className="login-form_section">
                <label className="login-form_section_password-label" for="login-form_password">Password:</label>
                <input onChange={(value) => onPasswordChange(value)} id="login-form_password" className="login-container_password-input"></input>
            </div>
            <button onClick={(event) => onSubmit(event)}>Submit</button>
            <button onClick={(event) => onSignup(event)}>Sign up</button>
        </form>
};

export default LoginForm;