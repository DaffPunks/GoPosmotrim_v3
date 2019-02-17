import pathToRegexp from 'path-to-regexp';

const routes = {
    root: '/',
    rooms: '/rooms'
};

export function createHref(route, params, options) {
    return pathToRegexp.compile(route)(params, options);
}

export default routes;
