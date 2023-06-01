const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);

server.listen(port);
