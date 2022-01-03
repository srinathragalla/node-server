const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('Nodejs : Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.');

});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Listening to requests');

});