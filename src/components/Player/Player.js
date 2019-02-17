import React from 'react';
import ReactPlayer from 'react-player';

import './Player.scss';

class Player extends React.Component {

    state = {
        player: null
    };


    onSeekMouseUp = e => {
        this.player.seekTo(parseFloat(e.target.value))
    };

    ref = player => {
        this.player = player;
    };

    render() {
        return (
            <div className="player">
                <ReactPlayer
                    ref={this.ref}
                    playing={true}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width="100%"
                    height="100%"
                    volume={.01}
                    onSeek={this.onSeek}
                />
                <input type="range" step="any" min="0" max="1"
                       onMouseUp={this.onSeekMouseUp}
                />
            </div>
        );
    }
}

export default Player;
