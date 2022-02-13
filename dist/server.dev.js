"use strict";

var http = require('http');

var port = 3000;

var app = require('./app');

var server = http.createServer(app);
server.listen(port);
//# sourceMappingURL=server.dev.js.map
