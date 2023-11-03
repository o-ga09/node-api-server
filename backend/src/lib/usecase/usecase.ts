import { RequestParam, Task, Response, TaskId } from '../domain/entity';

export interface InputPort {
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

export class Usecase {
  readonly inputPort: InputPort;
  constructor(inputport: InputPort) {
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

  async createTask(param: RequestParam) {
    const status = await this.inputPort.createTask(param);
    return status;
  }

  async updatedTask(id: number, param: RequestParam) {
    const taskId = new TaskId(id);
    const status = await this.inputPort.updateTask(taskId, param);
    return status;
  }

  async deleteTask(id: number): Promise<Response> {
    const taskId = new TaskId(id);
    const status = await this.inputPort.deleteTask(taskId);
    return status;
  }
}
