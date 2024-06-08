const http= require('http');

http.createServer((req,resp) => {
    resp.write("hello ,I'M Jose Mourihno");
    resp.end(); // to tell browser engine to stop
}).listen(4500);