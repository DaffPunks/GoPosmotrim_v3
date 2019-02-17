import React from 'react';
import {Route} from 'react-router-dom';

import Room from 'containers/Room/Room';
import Home from 'containers/Home/Home';
import routes from 'routes';

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Route exact path={routes.root} component={Home}/>
                <Route path={routes.room} component={Room}/>
            </div>
        );
    }
}
