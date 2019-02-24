import React from 'react';
import PropTypes from 'prop-types';

import './SidebarButton.scss';

class SidebarButton extends React.Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        const {icon, onClick} = this.props;

        return (
            <div className="sidebar-button" onClick={onClick}>
                <img className="sidebar-button__icon" src={icon} alt="icon"/>
            </div>
        );
    }
}

export default SidebarButton;
