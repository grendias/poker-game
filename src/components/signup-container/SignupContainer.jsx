import React, {Component} from 'react';
import './SignupContainer.css';
import SignupForm from './SignupForm';
import {post} from '../../client/rest';

class SignupContainer extends Component {

    updateField(fieldName, value) {
        this[fieldName] = value;
    }

    submit(event) {
        const username = this.username;
        const password = this.password;
        const firstName = this.firstName;
        const lastName = this.lastName;
        const dateOfBirth = this.dateOfBirth;

        if (username.length && password.length) {
            post('http://localhost:8080/texas-holdem/texas-holdem-mw/signup', {
                username,
                password,
                firstName,
                lastName,
                dateOfBirth,
            })
                .then(() => this.props.history.push('/login'))
                .catch(() => {
                    console.log('error');
                });
        }
        event.preventDefault();
    }

    render() {
        return <div className="signup-container">
            <SignupForm
                onSubmit={this.submit.bind(this)}
                onUpdateField={this.updateField.bind(this)}
            />
        </div>
    }

}

export default SignupContainer;