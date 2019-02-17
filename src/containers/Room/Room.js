import React from 'react';
import {NavLink, withRouter} from "react-router-dom";

import Sidebar from 'components/Sidebar/Sidebar'
import Player from "components/Player/Player";
import Header from "../../components/Header/Header";

class Room extends React.Component {
    render() {
        return (
            <div>
                <Sidebar>
                    <Header/>
                    <Player/>
                </Sidebar>
            </div>
        );
    }
}

export default withRouter(Room);
