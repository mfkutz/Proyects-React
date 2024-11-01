import { Router } from "express";
import { createProduct } from "./handlers/product";

const router = Router();

//Routing
router.get("/", (req, res) => {
  res.send("Hola mundo en get");
});

router.post("/", createProduct);

router.put("/", (req, res) => {
  res.send("Hola mundo en put");
});

router.delete("/", (req, res) => {
  res.send("Hola mundo en delete");
});

export default router;
