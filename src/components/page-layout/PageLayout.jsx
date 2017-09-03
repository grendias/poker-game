import React, { Component } from 'react';
import TableContainer from '../table-container/TableContainer';
import './PageLayout.css';
import WebSocket from '../../client/websocket';

class PageLayout extends Component {

    constructor() {
        super();
        this.webSocket = new WebSocket('http://127.0.0.1:8080/texas-holdem-mw/texas-holdem-mw/texasholdem');
    }

    componentDidMount() {
        this.webSocket.connect()
            .then(() =>  this.webSocket.subscribe('/topic/table1'));
    }

    render() {
        return (
            <div className="page-layout">

                <TableContainer/>
                <button onClick={ ()  =>  this.webSocket.sendMessage('/app/topic/table1', { payload: 'HELLLLOOO!!!'}) }>Click me</button>
            </div>
        );
    }
}

export default PageLayout;
