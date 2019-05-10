// Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Moche does not understand
require.extensions['.css'] = function() {};