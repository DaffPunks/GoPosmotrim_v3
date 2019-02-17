import React from 'react';
import PropTypes from 'prop-types';

import {Logo as LogoIcon} from 'components/Icon/Icon';

import './Logo.scss';

class Logo extends React.Component {
    static propTypes = {
        onClick: PropTypes.func
    };

    render() {
        const {onClick} = this.props;

        return (
            <div className="logo" onClick={onClick}>
                <img src={LogoIcon} alt="Logo"/>
            </div>
        );
    }
}

export default Logo;
