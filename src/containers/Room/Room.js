import React from 'react';
import {withRouter} from 'react-router-dom';
import openSocket from 'socket.io-client';

import Sidebar from 'components/Sidebar/Sidebar';
import Player from 'components/Player/Player';
import Header from 'components/Header/Header';
import {Users, List} from 'components/Icon/Icon';
import routes, {createHref} from "routes";

class Room extends React.Component {

    componentDidMount() {
        console.log(this.props);
        const {match: {params}} = this.props;

        this.socket = openSocket();

        this.socket.emit('JOIN_ROOM', {roomId: params.id});

        this.socket.on('GET_MSG', (data) => {
            console.log('MESSAGE', data);
        });

        // socket.emit('subscribeToTimer', 1000);
    }

    getActions() {
        const {match: {params}} = this.props;

        return [
            {
                icon: Users,
                handler: () => {
                    this.socket.emit('GET_INFO');
                }
            },
            {
                icon: List,
                handler: () => {
                    this.socket.emit('SEND_MSG', {msg: 'bullshit'});
                }
            }
        ];
    }

    goHome = () => {
        console.log('ASD');
        this.props.history.push(createHref(routes.root));
    };

    render() {
        return (
            <div>
                <Sidebar
                    onLogoClick={this.goHome}
                    actions={this.getActions()}
                >
                    <Header/>
                    <Player/>
                </Sidebar>
            </div>
        );
    }
}

export default withRouter(Room);
