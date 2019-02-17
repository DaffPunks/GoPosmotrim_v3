import React from 'react';
import {Route} from 'react-router-dom';

import Room from 'containers/Room/Room';

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Room}/>
            </div>
        );
    }
}
