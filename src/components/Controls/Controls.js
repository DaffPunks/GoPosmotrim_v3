import React from 'react';
import PropTypes from 'prop-types';
import Timeline from 'components/Timeline/Timeline';
import {Play, Pause, Fullscreen, Volume} from 'components/Icons';

import './Controls.scss';

class Controls extends React.Component {
    static propTypes = {
        onTimelineMouseDown: PropTypes.func.required,
        onTimelineMouseUp: PropTypes.func.required,
        onTimelineChange: PropTypes.func.required,
        onPlayPauseClick: PropTypes.func.required,
        onFullscreenClick: PropTypes.func.required,
        playing: PropTypes.bool.isRequired,
        progress: PropTypes.number.required
    };

    render() {
        const {
            onTimelineChange,
            onTimelineMouseDown,
            onTimelineMouseUp,
            onPlayPauseClick,
            onFullscreenClick,
            playing,
            progress
        } = this.props;

        return (
            <div className="controls">
                <div className="controls__timeline">
                    <Timeline
                        onChange={onTimelineChange}
                        onMouseDown={onTimelineMouseDown}
                        onMouseUp={onTimelineMouseUp}
                        progress={progress}
                    />
                </div>
                <div className="controls__main">
                    <div className="controls__left">
                        <div className="controls__play" onClick={onPlayPauseClick}>
                            {playing ? <Pause/> : <Play/>}
                        </div>
                        <div className="controls__video-name">
                            <div className="controls__title">True Sight : The International 2018 Finals</div>
                            <div className="controls__desc">dota2 • 3 145 940 views</div>
                        </div>
                    </div>
                    <div className="controls__right">
                        <div className="controls__volume">
                            <Volume/>
                        </div>
                        <div className="controls__fullscreen" onClick={onFullscreenClick}>
                            <Fullscreen/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;
