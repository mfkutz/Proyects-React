import express from "express";
import colors from "colors";
import router from "./router";
import db from "./config/db";

//Connection to db
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.cyan("Conexion exitosa a la BD"));
  } catch (error) {
    console.log(error);
    console.log(colors.red.bold("hubo un error al conectar a la BD"));
  }
}

connectDB();

const server = express();

//leer datos de formularios (middleware)
server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

//Route
server.use("/api/products", router);
server.use((req, res) => {
  res.json("URL NO Entontrada");
});

export default server;
