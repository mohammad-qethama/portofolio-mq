'use strict';

const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));

server.get('/test',(req,resp) => {
resp.send('i am a live')

})


server.listen (PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})