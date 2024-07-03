
import { Task, TaskId, Response } from "../../domain/task/entity";
import { RequestParam } from "../../domain/types";

export interface ITaskInterface {
    getAll(): Promise<Task[]>;
    // eslint-disable-next-line no-unused-vars
    getById(id: TaskId): Promise<Task>;
    // eslint-disable-next-line no-unused-vars
    createTask(param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    updateTask(id: TaskId, param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    deleteTask(id: TaskId): Promise<Response>;
  }