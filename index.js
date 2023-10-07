const http = require('http');


const server = http.createServer(() => {

    resizeBy.send("This is my first server");
})

server.listen(process.env.PORT || 3000)