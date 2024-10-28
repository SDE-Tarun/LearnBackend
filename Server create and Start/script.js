// Aapne http module ko bahar nikala hai node se aur apne is constant mein move krlia hai.
const http = require('http');

// Is code se ek server bana aur humne is server naam ke cont mein save krlia.
const server = http.createServer((req,res)=>{
    res.end('Hello');
})

// Server chal raha hai localhost:3000 par
server.listen(3000);