import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.any.isRequired,
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string
};

const defaultProps = {
    size: 24
};

export default function Icon({data, size, className, height, width}) {
    return (
        <img
            className={className}
            src={data}
            width={width || size}
            height={height || size}
            alt="icon"
        />
    );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
