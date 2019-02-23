import pathToRegexp from 'path-to-regexp';

const routes = {
    root: '/',
    room: '/room/:id'
};

export function createHref(route, params, options) {
    return pathToRegexp.compile(route)(params, options);
}

export default routes;
