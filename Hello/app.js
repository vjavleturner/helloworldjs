const express = require("express"),
server    = express(),
port      = process.env.PORT || 5000;

// We really should be using a real logging middleware module
server.use((req, res, next) => {
console.log('%s - GET %s', (new Date()).toLocaleString(), req.path);
next();
});

server.get("/healthcheck", (req, res) => {
res.send('OK');
});

server.get("/", (req, res) => {
res.send("Hello World");
});

server.get("/:name", (req, res) => {
res.send("Hello " + req.params.name);
});

server.listen(port, () => {
console.log("Hello World now running on port %s", port);
});