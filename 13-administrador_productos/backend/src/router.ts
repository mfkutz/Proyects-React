import { Router } from "express";
import { createProduct, getProduct } from "./handlers/product";
import { body } from "express-validator";
import { handleInputErrors } from "./middlewares";

const router = Router();

//Routing
router.get("/", getProduct);

router.post(
  "/",
  body("name").notEmpty().withMessage("El nombre de Producto no puede ir vacio"),
  body("price")
    .notEmpty()
    .withMessage("El precio no puede ir vacío")
    .isNumeric()
    .withMessage("Valor no válido")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"),
  handleInputErrors,
  createProduct
);

router.put("/", (req, res) => {
  res.send("Hola mundo en put");
});

router.delete("/", (req, res) => {
  res.send("Hola mundo en delete");
});

export default router;
