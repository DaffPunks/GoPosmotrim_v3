'use strict';
const {
    addWebpackStyle,
    addWebpackScript
} = require('../utils/layout');

module.exports = function createStructure(name) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>GoPosmotrim v3</title>
    <meta charset="utf-8">
    <!--<link rel="shortcut icon" href="/favicon.png" sizes="16x16"/>-->
    ${addWebpackScript(`${name}.js`)}
</head>
<body>
    <div id="root"></div>
</body>
</html>
    `.trim();
};
