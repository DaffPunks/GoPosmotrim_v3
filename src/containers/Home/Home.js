import React from 'react';
import {withRouter} from 'react-router-dom';

import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";


class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar>
                        <Header/>
                    </Sidebar>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
