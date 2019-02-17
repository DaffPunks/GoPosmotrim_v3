import React from 'react';

import './Sidebar.scss';

class Sidebar extends React.Component{

    render() {
        return (
            <div>
                <div className="sidebar">
                </div>
                <div className="sidebar__children">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Sidebar;