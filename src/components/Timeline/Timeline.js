import React from 'react';
import PropTypes from "prop-types";

import './Timeline.scss';


class Timeline extends React.Component {
    static propTypes = {
        progress: PropTypes.number.isRequired,
        onChange: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func
    };

    state = {
        currentX: 0,    // Current point
        startX: 0,      // Start point
        endX: 0,        // Max Point
        showTime: true
    };

    progressRef = timeline => {
        this.timeline = timeline;

        this.initDocumentSize();

        window.addEventListener('resize', () => {
            this.initDocumentSize();
        });
    };

    initDocumentSize() {
        const initial = this.timeline.getBoundingClientRect();

        this.setState({
            startX: initial.x,
            currentX: initial.x,
            endX: initial.width
        });
    }

    getProgress(e) {
        const {startX, endX} = this.state;

        let transition = e.clientX - startX;

        if (transition < 0) {
            transition = 0;
        }

        if (transition > endX) {
            transition = endX;
        }

        return transition / endX;
    }

    onMouseDown = () => {
        const {onMouseDown} = this.props;

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);

        onMouseDown();
    };

    onMouseUp = (e) => {
        const {onMouseUp} = this.props;

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);

        const progress = this.getProgress(e);

        onMouseUp(progress);
    };

    onMouseMove = (e) => {
        const {onChange} = this.props;

        const progress = this.getProgress(e);

        onChange(progress);
    };

    render() {
        const {progress} = this.props;
        const {endX} = this.state;

        return (
            <div className="timeline"
                 ref={this.progressRef}
                 // onMouseDown={this.onLineClick}
                 onMouseDown={this.onMouseDown}
            >
                <div className="timeline__padding">

                </div>
                <div
                    className="timeline__inside"
                    style={{width: `${endX * progress}px`}}
                >
                    <div
                        className="timeline__point"
                    />
                </div>
            </div>
        );
    }
}

export default Timeline;
