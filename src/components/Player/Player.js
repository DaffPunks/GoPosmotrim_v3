import React from 'react';
import ReactPlayer from 'react-player';

import './Player.scss';
import Timeline from "components/Timeline/Timeline";
import Controls from "../Controls/Controls";

const youtubeConfig = {
    disablekb: 1
};

class Player extends React.Component {

    state = {
        progress: 0,
        seek: false
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
        console.log('PLAY');
        this.setState({play: true});
    };

    onPause = () => {
        console.log('PAUSE');
        this.setState({play: false});
    };

    onBuffer = () => {
        console.log('BUFFER');
        this.setState({play: false});
    };

    onSeekMouseDown = () => {
        console.log('Mouse Down');

        this.setState({ seeking: true })
    };

    onSeekChange = progress => {
        console.log('Mouse Change');

        this.setState({progress});
    };

    onSeekMouseUp = progress => {
        console.log('Mouse Up', progress);

        this.setState({ seeking: false, progress });

        this.player.seekTo(parseFloat(progress));
    };


    render() {
        const {progress} = this.state;

        return (
            <div className="player">
                <div className="player__player">
                    <ReactPlayer
                        ref={this.setPlayerRef}
                        playing={true}
                        url='https://www.youtube.com/watch?v=IHNzOHi8sJs'
                        width="100%"
                        height="100%"
                        volume={.02}
                        controls={false}
                        onProgress={this.onProgress}
                        onPause={this.onPause}
                        onPlay={this.onPlay}
                        onBuffer={this.onBuffer}
                        progressInterval={100}
                        // config={{youtube: youtubeConfig}}
                    />
                </div>
                <div className='player__controls'>
                    <Controls/>
                </div>
            </div>
        );
    }
}

export default Player;
