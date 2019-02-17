import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';

class Sidebar extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const {children} = this.props;

        return (
            <div>
                <div className="sidebar"/>
                <div className="sidebar__children">
                    {children}
                </div>
            </div>
        );
    }
}

export default Sidebar;
