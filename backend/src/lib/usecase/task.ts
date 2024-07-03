import { Task, TaskId, Response } from '../domain/task/entity';
import { RequestParam } from '../domain/types';
import { ITaskInterface } from './interface/task';

export class TaskUsecase {
  readonly inputPort: ITaskInterface;
  constructor(inputport: ITaskInterface) {
    this.inputPort = inputport;
  }

  async getAll(): Promise<Task[]> {
    const tasks = await this.inputPort.getAll();
    return tasks;
  }

  async getById(id: number): Promise<Task> {
    const taskId = new TaskId(id);
    const task = await this.inputPort.getById(taskId);
    return task;
  }

  async createTask(param: RequestParam):Promise<Response> {
    const status = await this.inputPort.createTask(param);
    return status;
  }

  async updatedTask(id: number, param: RequestParam):Promise<Response> {
    const taskId = new TaskId(id);
    const status = await this.inputPort.updateTask(taskId, param);
    return status;
  }

  async deleteTask(id: number):Promise<Response> {
    const taskId = new TaskId(id);
    const status = await this.inputPort.deleteTask(taskId);
    return status;
  }
}
