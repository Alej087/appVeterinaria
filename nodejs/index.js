const http = require('http');
const requestHandler = require("./request-handler");
const server = http.createServer(requestHandler);

server.listen(8000 , ()=>{
    console.log("El servidor está escuchando peticiones en http://localhost:8000/");
});