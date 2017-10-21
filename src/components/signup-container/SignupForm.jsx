import React from 'react';
import './SignupForm.css';
import FORM_FIELD_NAMES from './FormFieldNames';

const SignupForm = ({ onSubmit, onUpdateField }) => {
    return <form className="signup-form">
        <div className="signup-form_section">
            <label className="signup-form_section_username-label" for="signup-form_username">Username:</label>
            <input onChange={(value) => onUpdateField(FORM_FIELD_NAMES.USERNAME, value)} name="signup-form_username" className="signup-form_username-input"></input>
        </div>
        <div className="signup-form_section">
            <label className="signup-form_section_password-label" for="signup-form_password">Password:</label>
            <input onChange={(value) => onUpdateField(FORM_FIELD_NAMES.PASSWORD, value)} name="signup-form_password" className="signup-form_password-input"></input>
        </div>
        <div className="signup-form_section">
            <label className="signup-form_section_firstname-label" for="signup-form_firstname">First Name:</label>
            <input onChange={(value) => onUpdateField(FORM_FIELD_NAMES.FIRST_NAME, value)} name="signup-form_firstname" className="signup-form_firstname-input"></input>
        </div>
        <div className="signup-form_section">
            <label className="signup-form_section_lastname-label" for="signup-form_lastname">Last Name:</label>
            <input onChange={(value) => onUpdateField(FORM_FIELD_NAMES.LAST_NAME, value)} name="signup-form_lastname" className="signup-form_lastname-input"></input>
        </div>
        <div className="signup-form_section">
            <label className="signup-form_section_date-of-birth-label" for="signup-form_date-of-birth-label">Date of Birth:</label>
            <input type="date" onChange={(value) => onUpdateField(FORM_FIELD_NAMES.DATE_OF_BIRTH, value)} name="signup-form_date-of-birth-label" className="signup-form_date-of-birth-label-input"></input>
        </div>
        <button onClick={(event) => onSubmit(event)}>Submit</button>
    </form>
};

export default SignupForm;