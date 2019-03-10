import React from 'react';
import PropTypes from 'prop-types';

import LogoIcon from 'components/Icons/Logo';

import './Logo.scss';

class Logo extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    };

    render() {
        const {onClick} = this.props;

        return (
            <div className="logo" onClick={onClick}>
                <LogoIcon width={47} height={27}/>
            </div>
        );
    }
}

export default Logo;
