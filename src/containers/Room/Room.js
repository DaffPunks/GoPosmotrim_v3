import React from 'react';
import {withRouter} from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar';
import Player from 'components/Player/Player';
import Header from 'components/Header/Header';
import {Users, List} from 'components/Icon/Icon';
import routes, {createHref} from "routes";

class Room extends React.Component {

    getActions() {
        return [
            {
                icon: Users,
                handler: () => {}
            },
            {
                icon: List,
                handler: () => {}
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
