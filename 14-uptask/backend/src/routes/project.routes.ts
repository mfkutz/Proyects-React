import { Router } from "express";
import { body, param } from "express-validator";
import { ProjectController } from "../controllers/Project.controller";
import { TaskController } from "../controllers/Task.controller";
import { handleInputErrors } from "../middlewares/validation";
import { projectExists } from "../middlewares/project";
import { taskExists } from "../middlewares/task";

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

//Routes for tasks
router.param("projectId", projectExists); // the routes use" validateProjectExists", can by deleted from routes

router.post(
  "/:projectId/task",
  body("name").notEmpty().withMessage("El nombre de la tarea es Obligatorio"),
  body("description").notEmpty().withMessage("La description de la tarea es Obligatoria"),
  handleInputErrors,
  TaskController.createTask
);

router.get("/:projectId/task", TaskController.getProjectTasks);

router.param("taskId", taskExists);
router.get(
  "/:projectId/task/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TaskController.getTaskById
);

router.put(
  "/:projectId/task/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  body("name").notEmpty().withMessage("El nombre de la tarea es Obligatorio"),
  body("description").notEmpty().withMessage("La description de la tarea es Obligatoria"),
  handleInputErrors,
  TaskController.updateTask
);

router.delete(
  "/:projectId/task/:taskId",
  param("taskId").isMongoId().withMessage("ID no válido"),
  handleInputErrors,
  TaskController.deleteTask
);

router.post(
  "/:projectId/task/:taskId/status",
  param("taskId").isMongoId().withMessage("ID no válido"),
  body("status").notEmpty().withMessage("EL estado es obligatorio"),
  handleInputErrors,
  TaskController.updateStatus
);

export default router;
