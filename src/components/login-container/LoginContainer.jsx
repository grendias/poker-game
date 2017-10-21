import React, { Component }  from 'react';
import './LoginContainer.css';
import LoginForm from './LoginForm';
import { post } from '../../client/rest';

class LoginContainer extends Component {

    usernameChange(username) {
        this.username = username;
    }

    passwordChange(password) {
        this.password = password;
    }

    submit(event) {
        const username = this.username;
        const password = this.password;

        if (username.length && password.length) {
            post('http://localhost:8080/texas-holdem/texas-holdem-mw/login', {
                username,
                password,
            })
            .then(() => this.props.history.push('/main'))
            .catch(() => {
                console.log('error');
            });
        }
        event.preventDefault();
    }

    signup(event) {
        this.props.history.push('/signup');
        event.preventDefault();
    }

    render() {
        return <div className="login-container">
            <LoginForm
                onSubmit={this.submit.bind(this)}
                onSignup={this.signup.bind(this)}
                onPasswordChange={this.passwordChange.bind(this)}
                onUsernameChange={this.usernameChange.bind(this)}
                />
        </div>
    }
}

export default LoginContainer;