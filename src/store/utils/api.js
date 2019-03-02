
export function createApiActionTypes(prefix, type) {
    return {
        REQUEST: `${prefix}/${type}_REQUEST`,
        SUCCESS: `${prefix}/${type}_SUCCESS`,
        FAILURE: `${prefix}/${type}_FAILURE`,
        CLEAR: `${prefix}/${type}_CLEAR`
    }
}

export function createLoadableList() {
    return {
        list: [],
        loaded: false,
        error: null
    }
}

export function createLoadableData() {
    return {
        data: {},
        loaded: false,
        error: null
    }
}

export function getActionCreator() {
    return function (action) {
        const {actionType, request, propertyName} = action;

        return function (config, options = {}) {
            return function (dispatch, getState) {
                if (actionType && (!options.silent)) {
                    dispatch({type: actionType.REQUEST});
                }

                return request(config, {dispatch, getState})
                    .then((data) => {

                        if (actionType) {
                            let payload = propertyName ? data[propertyName] : data;

                            dispatch({type: actionType.SUCCESS, payload});
                        }

                        return data;
                    })
                    .catch((error) => {
                        // TODO: Parse Error
                        // if (actionType && (!options.ignoreError)) {
                        //     const payload = parseError(error);

                            // dispatch({type: actionType.FAILURE, payload});
                        // }

                        dispatch({type: actionType.FAILURE, error});

                        throw error;
                    });
            };
        };
    };
}

export function createReducer(initialState, actionType, options = {}) {
    return function (state = initialState, {type, payload}) {
        switch (type) {
            case actionType.REQUEST:
                return {...state, error: null, loaded: false};
            case actionType.SUCCESS: {
                const data = {};
                if (Array.isArray(payload)) {
                    data.list = payload;
                } else {
                    data.data = payload;
                }

                return {...state, error: null, loaded: true, ...data};
            }

            case actionType.FAILURE:
                return {...state, loaded: true, error: payload};
            case actionType.CLEAR: {
                const data = {};
                if (options.normalized || Array.isArray(payload)) {
                    data.list = [];
                } else {
                    data.data = {};
                }

                return {...state, error: null, loaded: false, ...data};
            }
            default:
                return state;
        }
    };
}
