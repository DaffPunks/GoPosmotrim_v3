import React from 'react';
import {findDOMNode} from 'react-dom';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

import Controls from "components/Controls/Controls";

import './Player.scss';

const youtubeConfig = {
    playerVars: { fs: 0 }
};

class Player extends React.Component {

    state = {
        playing: true,
        progress: 0,
        seek: false,
        fullscreen: false
    };

    setMainRef = main => {
        this.main = main;

        screenfull.onchange(() => {
            this.setState({fullscreen: screenfull.isFullscreen});
        });
    };

    setPlayerRef = player => {
        this.player = player;
    };

    onProgress = ({played}) => {
        const {seeking} = this.state;

        if (!seeking) {
            this.setState({progress: played});
        }
    };

    onPlay = () => {
        this.setState({playing: true});
    };

    onPause = () => {
        this.setState({playing: false});
    };

    onBuffer = () => {
        // this.setState({playing: false});
    };

    onSeekMouseDown = () => {
        this.setState({ seeking: true })
    };

    onSeekChange = progress => {
        this.setState({progress});
    };

    onSeekMouseUp = progress => {
        this.setState({ seeking: false, progress });

        this.player.seekTo(parseFloat(progress));
    };

    onPlayPauseClick = () => {
        const {playing} = this.state;

        this.setState({playing: !playing});
    };

    onFullscreenClick = async () => {
        try {
            await screenfull.toggle(findDOMNode(this.main));
        } catch (e) {
            console.error('Fullscreen Mode Error', e);
        }
    };


    render() {
        const {progress, playing, fullscreen} = this.state;

        return (
            <div className={`player ${fullscreen ? 'player--fullscreen' : ''}`} ref={this.setMainRef}>
                <div className="player__player">
                    <ReactPlayer
                        ref={this.setPlayerRef}
                        playing={playing}
                        url='https://www.youtube.com/watch?v=Pw-0pbY9JeU'
                        width="100%"
                        height="100%"
                        volume={.02}
                        controls={false}
                        onProgress={this.onProgress}
                        onPause={this.onPause}
                        onPlay={this.onPlay}
                        onBuffer={this.onBuffer}
                        progressInterval={100}
                        config={{
                            youtube: youtubeConfig
                        }}
                    />
                </div>
                <div className='player__controls'>
                    <Controls
                        onTimelineChange={this.onSeekChange}
                        onTimelineMouseDown={this.onSeekMouseDown}
                        onTimelineMouseUp={this.onSeekMouseUp}
                        onPlayPauseClick={this.onPlayPauseClick}
                        onFullscreenClick={this.onFullscreenClick}
                        playing={playing}
                        progress={progress}
                    />
                </div>
            </div>
        );
    }
}

export default Player;
