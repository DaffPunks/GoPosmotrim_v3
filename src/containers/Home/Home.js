import React from 'react';
import {Link, withRouter} from "react-router-dom";
import routes from "../../routes";

class Home extends React.Component {
    render() {
        return (
            <div>
                Home
                <Link to={routes.rooms}>asd</Link>
            </div>
        );
    }
}

export default withRouter(Home);
