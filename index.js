const express = require("express");
const app = express();


app.use(express.static(__dirname+"/public"));


app.listen(process.env.PORT, ()=> {
    console.log("servidor en marcha, en el puerto 3000");
})

