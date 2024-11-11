import type { Request, Response } from "express";
import Task from "../models/Task";

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    try {
      const task = new Task(req.body);
      // Asigna el ID del proyecto actual (req.project.id) a la propiedad 'project' de la nueva tarea.
      // Esto establece una relación en la tarea, indicando a qué proyecto pertenece.
      task.project = req.project.id;
      // Agrega el ID de la tarea recién creada (task.id) al array 'tasks' en el proyecto (req.project).
      // Esto actualiza la lista de tareas asociadas en el proyecto, creando una relación bidireccional.
      req.project.tasks.push(task.id);

      await Promise.allSettled([task.save(), req.project.save()]);

      res.send("Tarea creada correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getProjectTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await Task.find({ project: req.project.id }); //buscando todas las tareas (Task) cuyo campo project coincide con el id del proyecto almacenado en req.project.id
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };
}
