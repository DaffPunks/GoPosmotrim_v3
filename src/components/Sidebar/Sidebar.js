import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo/Logo';
import SidebarButton from 'components/SidebarButton/SidebarButton';

import './Sidebar.scss';

class Sidebar extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        actions: PropTypes.arrayOf(PropTypes.shape({
            icon: PropTypes.string.isRequired,
            handler: PropTypes.func.isRequired
        })),
        onLogoClick: PropTypes.func
    };

    renderActions() {
        const {actions} = this.props;

        if (!actions) {
            return null;
        }

        return (
            <div>
                {actions.map((action, key) =>
                    <SidebarButton key={key} icon={action.icon} onClick={action.handler}/>
                )}
            </div>
        );

    }

    render() {
        const {children, onLogoClick} = this.props;

        return (
            <div>
                <div className="sidebar">
                    <Logo onClick={onLogoClick}/>
                    <div className="sidebar__buttons">
                        {this.renderActions()}
                    </div>
                </div>
                <div className="sidebar__children">
                    {children}
                </div>
            </div>
        );
    }
}

export default Sidebar;
