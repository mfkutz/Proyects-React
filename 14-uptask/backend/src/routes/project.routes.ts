import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/Project.controller";
import { handleInputErrors } from "../middlewares/validation";

const router = Router();

router.post(
  "/",
  body("projectName").notEmpty().withMessage("El nombre del Proyecto es Obligatorio"),
  body("clientName").notEmpty().withMessage("El nombre del Cliente es Obligatorio"),
  body("description").notEmpty().withMessage("La descripción del Proyecto es Obligatoria"),
  handleInputErrors,
  ProjectController.createProject
);
router.get("/", ProjectController.getAllProjects);
router.get(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.getProjectById
);
router.put(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  body("projectName").notEmpty().withMessage("El nombre del Proyecto es Obligatorio"),
  body("clientName").notEmpty().withMessage("El nombre del Cliente es Obligatorio"),
  body("description").notEmpty().withMessage("La descripción del Proyecto es Obligatoria"),
  handleInputErrors,
  ProjectController.updateProject
);
router.delete(
  "/:id",
  param("id").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  ProjectController.deleteProject
);

export default router;
