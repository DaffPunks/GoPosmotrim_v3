// const { resolve } = require('path');

// const publicDir = resolve(__dirname, '../public');
// const buildDir = resolve(publicDir, 'build');

function srcScript(src, {async = false, defer = false} = {}) {
    return `<script${async ? ' async' : ''}${defer ? ' defer' : ''} src="${src}"></script>`;
}

function inlineScript(content, nonce) {
    return `<script ${nonce ? `nonce="${nonce}"` : ''}>${content}</script>`;
}

function srcStylesheet(href) {
    return `<link rel="stylesheet" href="${href}"/>`;
}

function inlineStylesheet(content, nonce) {
    return `<style ${nonce ? `nonce="${nonce}"` : ''}>${content}</style>`;
}

function getResourcePath() {
    // const webpackManifest = require(resolve(buildDir, 'manifest.json'));
    // return webpackManifest[name];
}

function addWebpackStyle(name) {
    const resource = getResourcePath(name);

    if (!resource) {
        return '';
    }

    return srcStylesheet(resource);
}

function addWebpackScript(name) {
    const resource = `/build/${name}`;

    return srcScript(resource, {defer: true});
}

module.exports = {
    srcScript,
    inlineScript,
    srcStylesheet,
    inlineStylesheet,
    addWebpackStyle,
    addWebpackScript
};
