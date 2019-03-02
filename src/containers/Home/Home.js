import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {compose} from "recompose";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import Sidebar from "components/Sidebar/Sidebar";
import Header from "components/Header/Header";
import {fetchRooms, selectRooms} from "store/reducers/room";


class Home extends React.Component {
    static propTypes = {
        rooms: PropTypes.array.isRequired,
        fetchRooms: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const {fetchRooms} = this.props;

        await fetchRooms();
    };

    render() {
        const {rooms} = this.props;

        return (
            <div>
                <div>
                    <Sidebar>
                        <Header/>
                        <div>
                            {rooms.map(room => {
                                return (
                                    <div>
                                        {`${room.id} ${room.name}`}
                                    </div>
                                );
                            })}
                        </div>
                    </Sidebar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    rooms: selectRooms
});

const mapDispatchToProps = {
    fetchRooms
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Home);
