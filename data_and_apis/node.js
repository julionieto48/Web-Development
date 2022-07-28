const http = require("http") ;  // traer libreria de node ara crear servidor

function sitioweb(req , result){  // funcion que ejecuta el servidor

    result.writeHead(200 , {"Content-type": "text/plain"}); // rta all good y envia texto plano
    result.end("servidor creado")
}

let servidor = http.createServer(sitioweb);
servidor.listen(6969, "127.0.0.1");

console.log("corriendo ...")


