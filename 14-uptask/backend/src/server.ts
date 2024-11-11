import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import projectRoutes from "./routes/project.routes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use("/api/projects", projectRoutes);
app.use((req, res) => {
  res.send("URL no encontrada");
});

export default app;
