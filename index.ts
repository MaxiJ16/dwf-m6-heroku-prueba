// continuos integration

// "scripts": {
//   "dev": "ts-node index.ts",
//   "test": "ava",
//   "build": "tsc index.ts",
//   "start": "node index.js"
// },

import * as express from "express";
const app = express();

//variable de ambiente
const port = process.env.PORT || 3000;

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola soy el servidor, heroku",
  });
});
app.listen(port, () => {
  console.log(`hola soy express y estoy corriendo en el puerto: ${port}`);
});
