import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import routes from "../../routes";

class Room extends React.Component {
    render() {
        return (
            <div>
                Room
                <NavLink to={routes.root}/>
            </div>
        );
    }
}

export default withRouter(Room);
