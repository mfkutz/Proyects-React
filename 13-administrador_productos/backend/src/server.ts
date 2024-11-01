import express from "express";
import router from "./router";
import db from "./config/db";

//Connection to db
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log("Conexion exitosa a la BD");
  } catch (error) {
    console.log(error);
    console.log("hubo un error al conectar a la BD");
  }
}

connectDB();

const server = express();

//Route
server.use("/products", router);

export default server;
