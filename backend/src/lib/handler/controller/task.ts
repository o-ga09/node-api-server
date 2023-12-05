import { RequestParam } from '../../domain/types';
import { logger } from '../../middleware/logger';
import { Usecase } from '../../usecase/usecase';

export class TaskController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    readonly usecase: Usecase
  ) {}
  async getAllUsers(_: any, res: { send: (_: string) => void }) {
    const tasks = await this.usecase.getAll();
    const resJSON = JSON.stringify(tasks);
    logger.info("OK");
    res.send(resJSON);
  }

  async getById(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;
    const task = await this.usecase.getById(id);
    const resJSON = JSON.stringify(task);
    res.send(resJSON);
  }

  async CreateUser(req: any, res: { send: (_: string) => void }) {
    const name: string = req.body.name;
    const desc: string = req.body.desc;
    const status: number = req.body.status;

    const param = new RequestParam(name, desc, status);
    const r = await this.usecase.createTask(param);
    console.log(r);
    res.send("OK");
  }

  async UpdateUser(req: any, res: { send: (_: string) => void }) {
    const id: number = req.params.id;
    const name: string = req.body.name;
    const desc: string = req.body.desc;
    const status: number = req.body.status;

    const param = new RequestParam(name, desc, status);
    const r = await this.usecase.updatedTask(id, param);
    console.log(r);
    res.send("OK");
  }

  async DeleteUser(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;

    const r = await this.usecase.deleteTask(id);
    console.log(r);
    res.send("OK");
  }
}
