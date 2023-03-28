


const http = require('http');


http.createServer((req, res) => {
    
    //1)res.writeHead(200, {'Content-Type': 'application/json'});
    //2)res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //2)res.writeHead(200, {'Content-Type': 'application/csv'});

    //1)const persona = {
    //    id: 1,
    //    nombre: 'Fernando'
    //}

    //1)res.write(JSON.stringify(persona));
    //2)res.write('id, nombre\n');
    //2)res.write('1, Maria\n');
    //2)res.write('2, Javier\n');
    res.write('Hola mundo');
    res.end();

})

.listen(8080);

console.log('Escuchando el puerto', 8080);