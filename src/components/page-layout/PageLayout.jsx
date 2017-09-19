import React, { Component } from 'react';
import TableContainer from '../table-container/TableContainer';
import './PageLayout.css';
import { post } from '../../client/rest';
import { connectToWebsocket, subscribeToDestination } from '../../redux/actions/WebSocketAction';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        connectToWebsocket: () => {
            dispatch(connectToWebsocket('http://127.0.0.1:8080/texas-holdem-mw/texas-holdem-mw/texasholdem'));
        },
        subscribeToRoom: (destination) => {
            dispatch(subscribeToDestination(destination));
        }
    }
};


class PageLayout extends Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.connectToWebsocket();
    }

    render() {
        return (
            <div className="page-layout">

                <TableContainer/>
                <button onClick={()  => {
                    this.props.subscribeToRoom('/topic/ROOM_1');
                    post('http://127.0.0.1:8080/texas-holdem-mw/texas-holdem-mw/game', {
                        username: 'blah',
                        tableId: 'ROOM_1',
                    });
                }}> Add to Room </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
