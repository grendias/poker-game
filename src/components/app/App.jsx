import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from '../login-container/LoginContainer';
import PageLayout from '../page-layout/PageLayout';
import SignupContainer from '../signup-container/SignupContainer';


const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LoginContainer}/>
            <Route exact path='/main' component={PageLayout}/>
            <Route exact path='/signup' component={SignupContainer}/>
        </Switch>
    </main>
);

export default App;