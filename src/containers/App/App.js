import React from 'react';
import {withRouter} from 'react-router-dom';

import Router from 'containers/Router/Router';


class App extends React.Component {
    render() {
        return (
            <Router/>
        );
    }
}

export default withRouter(App);
