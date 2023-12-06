import { RequestParam } from '../../domain/types';
import { logger } from '../../middleware/logger';
import { Usecase } from '../../usecase/usecase';

export class TaskController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    readonly usecase: Usecase
  ) {}
  async getAllTasks(_: any, res: { send: (_: string) => void }) {
    const tasks = await this.usecase.getAll();
    const resData = tasks.map((task) => {
      return {
        taskId: task.taskId.Value,
        taskName: task.taskName.Value,
        taskDesc: task.taskDesc.Value,
        taskStatus: task.taskStatus.Value,
        taskCreatedAt: task.taskCreatedAt.Value,
        taskUpdatedAt: task.taskUpdatedAt.Value
      };
    });
    const resJSON = JSON.stringify(resData);
    logger.info("OK");
    res.send(resJSON);
  }

  async getById(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;
    const task = await this.usecase.getById(id);
    const resData = {
        taskId: task.taskId.Value,
        taskName: task.taskName.Value,
        taskDesc: task.taskDesc.Value,
        taskStatus: task.taskStatus.Value,
        taskCreatedAt: task.taskCreatedAt.Value,
        taskUpdatedAt: task.taskUpdatedAt.Value
    };
    const resJSON = JSON.stringify(resData);
    res.send(resJSON);
  }

  async CreateTask(req: any, res: { send: (_: string) => void }) {
    const name: string = req.body.name;
    const desc: string = req.body.desc;
    const status: number = req.body.status;

    const param = new RequestParam(name, desc, status);
    const r = await this.usecase.createTask(param);
    res.send(JSON.stringify(r));
  }

  async UpdateTask(req: any, res: { send: (_: string) => void }) {
    const id: number = req.params.id;
    const name: string = req.body.name;
    const desc: string = req.body.desc;
    const status: number = req.body.status;

    const param = new RequestParam(name, desc, status);
    const r = await this.usecase.updatedTask(id, param);
    res.send(JSON.stringify(r));
  }

  async DeleteTask(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;

    const r = await this.usecase.deleteTask(id);
    res.send(JSON.stringify(r));
  }
}
