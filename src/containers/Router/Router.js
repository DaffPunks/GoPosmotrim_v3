import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import routes from 'routes';

import Home from 'containers/Home/Home';
import Room from "containers/Room/Room";

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Room}/>
            </div>
        );
    }
}
