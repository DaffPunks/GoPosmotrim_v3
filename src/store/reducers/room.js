import {combineReducers} from 'redux';

import {
    createApiActionTypes,
    createLoadableList,
    getActionCreator,
    createReducer
} from 'store/utils/api';
import api from 'services/api';

const actionCreator = getActionCreator();

const FETCH_ROOMS = createApiActionTypes('room', 'FETCH_ROOMS');

export const fetchRooms = actionCreator({
    request: (data) => api.request({url: 'rooms', method: 'GET', ...data}),
    actionType: FETCH_ROOMS
});

/* REDUCERS */

const rooms = createReducer(createLoadableList(), FETCH_ROOMS);

const room = combineReducers({
    rooms
});

export default room;

export const selectRooms = (state) => state.room.rooms.list;
export const selectRoomsLoaded = (state) => state.room.rooms.loaded;
export const selectRoomsError = (state) => state.room.rooms.error;
