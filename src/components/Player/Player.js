import React from 'react';
import ReactPlayer from 'react-player';

import './Player.scss';

class Player extends React.Component {

    state = {
        transitionX: 0,
        initialX: 0,
        maxX: 0,
        percent: 0
    };


    onSeekMouseUp = e => {
        this.player.seekTo(parseFloat(e.target.value))
    };

    ref = player => {
        this.player = player;
    };

    progressRef = progress => {
        const initial = progress.getBoundingClientRect();

        this.setState({
            initialX: initial.x,
            transitionX: initial.x,
            maxX: initial.width
        });
    };

    onMouseDown = (e) => {
        this.setState(
            {
                transitionX: e.clientX
            },
            () => {
                document.addEventListener('mousemove', this.onMouseMove);
                document.addEventListener('mouseup', this.onMouseUp);
            }
        );
    };

    onMouseUp = () => {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);

        this.seek();
    };

    onMouseMove = (e) => {
        const {initialX, maxX} = this.state;
        let transition = e.clientX;

        if (e.clientX - initialX < 0) {
            transition = initialX;
        }

        if (e.clientX - initialX > maxX) {
            transition = initialX + maxX;
        }

        this.setState({transitionX: transition});
    };

    onLineClick = async (e) => {
        await this.setState({transitionX: e.clientX});

        this.seek();
    };

    seek = async () => {
        const {initialX, transitionX, maxX} = this.state;

        const lengthPercent = (transitionX - initialX) / (maxX / 100) / 100;

        this.setState({percent: lengthPercent});

        this.player.seekTo(parseFloat(lengthPercent))
    }

    render() {
        const {transitionX, initialX, percent} = this.state;

        return (
            <div className="player">
                <div className="player__player">
                    <ReactPlayer
                        ref={this.ref}
                        playing={true}
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width="100%"
                        height="100%"
                        volume={.01}
                        onSeek={this.onSeek}
                        controls={true}
                    />
                    <div></div>
                </div>
                <div className='player__controls'>
                    <div className="player__progress"
                         ref={this.progressRef}
                         onClick={this.onLineClick}
                    >
                        <div className="player__progress-point"
                             style={{transform: `translateX(${transitionX - initialX}px)`}}
                             onMouseDown={this.onMouseDown}
                        />
                        <div className="player__progress-inside" style={{width: `${percent * 100}%`}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
