import React from 'react';

import './Controls.scss';
import Timeline from "../Timeline/Timeline";

class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <Timeline
                    // onChange={this.onSeekChange}
                    // onMouseDown={this.onSeekMouseDown}
                    // onMouseUp={this.onSeekMouseUp}
                    progress={0}
                />
                <div className="controls__play">

                </div>
            </div>
        );
    }
}

export default Controls;
