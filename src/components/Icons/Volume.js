/* eslint-disable */
import React from 'react';
import Icon from 'components/Icon/Icon';
import data from 'assets/volume.svg';

export default function (props) {
    return <Icon
        data={data}
        size={props.size}
        height={props.height}
        width={props.width}
    />;
}
