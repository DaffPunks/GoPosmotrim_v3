import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers';

export default function configureStore(services) {
    const middlewares = [thunk.withExtraArgument(services)];

    if (process.env.NODE_ENV !== 'production') {
        const logger = createLogger({collapsed: true});
        middlewares.push(logger);
    }

    return createStore(
        // rootReducer,
        applyMiddleware(...middlewares)
    );
}
