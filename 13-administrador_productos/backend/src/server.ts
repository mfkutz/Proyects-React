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

//Route
server.use("/products", router);

export default server;
