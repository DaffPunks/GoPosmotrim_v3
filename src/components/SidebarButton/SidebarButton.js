import React from 'react';
import PropTypes from 'prop-types';

import './SidebarButton.scss';

class SidebarButton extends React.Component {
    static propTypes = {
        icon: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {icon, onClick} = this.props;

        return (
            <div className="sidebar-button" onClick={onClick}>
                <div className="sidebar-button__icon">
                    {icon}
                </div>
            </div>
        );
    }
}

export default SidebarButton;
