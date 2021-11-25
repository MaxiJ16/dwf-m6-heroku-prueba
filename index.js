"use strict";
// continuos integration
exports.__esModule = true;
// "scripts": {
//   "dev": "ts-node index.ts",
//   "test": "ava",
//   "build": "tsc index.ts",
//   "start": "node index.js"
// },
var express = require("express");
var app = express();
//variable de ambiente
var port = process.env.PORT || 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola soy el servidor"
    });
});
app.listen(port, function () {
    console.log("hola soy express y estoy corriendo en el puerto: ".concat(port));
});
