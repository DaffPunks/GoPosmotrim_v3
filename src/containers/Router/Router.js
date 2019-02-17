import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import routes from 'routes';

import Home from 'containers/Home/Home';
import Room from "containers/Room/Room";

export default class Router extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr/>

                <Route exact path="/" component={() => (<div>One</div>)}/>
                <Route path="/about" component={() => (<div><Link to="/">Home</Link></div>)}/>
                <Route path="/topics" component={() => (<div>Three</div>)}/>
            </div>
        );
    }
}
