// continuos integration

// "scripts": {
  //   "dev": "ts-node index.ts",
  //   "test": "ava",
//   "build": "tsc index.ts",
//   "start": "node index.js"
// },

import * as express from "express";
const app = express();

// con esto decimos que cualquier archivo que exista en la carpeta dist debe ser servido
app.use(express.static("dist"));

const dev = process.env.NODE_ENV == "development";

console.log(dev);

//variable de ambiente
const port = process.env.PORT || 3000;

// para declarar una variable de ambiente en la terminal
// ej : export USER_FULLNAME=maxi
// para hacer como un console desde la consola echo $USER_FULLNAME
// console.log(process.env.USER_FULLNAME);

// generamos un endpoint en mi api llamado env
// devuelve un json
app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

app.get("/db-env", (req, res) => {
  res.json({
    "db-host": process.env.DB_HOST,
  });
});

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola soy el servidor, heroku",
  });
});
//ponerle el * al get quiere decir "cualquier ruta"
app.get("*", (req, res) => {
  //__dirname es la ruta donde esta parado este archivo
  // con esto le digo que si no es ninguna de las rutas configuradas en el back,
  // ni tampoco en el dist, también andá a parar a el index.html
  // porque es el index.html quien tiene el router y el mecanismo para poder decidir que mostrar
  res.sendFile(__dirname+"/dist/index.html");
});

app.listen(port, () => {
  console.log(`hola soy express y estoy corriendo en el puerto: ${port}`);
});
