import React from 'react';
import PropTypes from 'prop-types';

import './SidebarButton.scss';

class SidebarButton extends React.Component {
    static propTypes = {
        icon: PropTypes.string.isRequire,
        onClick: PropTypes.func.isRequire
    };

    render() {
        const {icon} = this.props;

        return (
            <div className="sidebar-button">
                <img className="sidebar-button__icon" src={icon} alt="icon"/>
            </div>
        );
    }
}

export default SidebarButton;
