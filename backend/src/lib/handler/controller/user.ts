import { RequestParam } from '../../domain/task/entity';
import { Usecase } from '../../usecase/usecase';

export class UserController {
  constructor(
    // eslint-disable-next-line no-unused-vars
    readonly usecase: Usecase
  ) {}
  async getAllUsers(_: any, res: { send: (_: string) => void }) {
    const tasks = await this.usecase.getAll();

    tasks.map((task) => {
      console.log(`task${task.taskId.Value}=================`);
      console.log('task name : ' + task.taskName.Value);
      console.log('task description : ' + task.taskDesc.Value);
      console.log('task status : ' + task.taskStatus.Value);
      console.log('task created : ' + task.taskCreatedAt.Value);
      console.log('task updated : ' + task.taskUpdatedAt.Value);
      console.log('=======================');
    });
    const resJSON = JSON.stringify(tasks);
    res.send(resJSON);
  }

  async getById(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;
    const task = await this.usecase.getById(id);

    console.log('==============');
    console.log(task.taskId);
    console.log(task.taskName);
    console.log(task.taskDesc);
    console.log(task.taskStatus);
    console.log(task.taskCreatedAt);
    console.log(task.taskUpdatedAt);
    console.log('==============');

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
    res.send('user registered');
  }

  async UpdateUser(req: any, res: { send: (_: string) => void }) {
    const id: number = req.params.id;
    const name: string = req.body.name;
    const desc: string = req.body.desc;
    const status: number = req.body.status;

    const param = new RequestParam(name, desc, status);
    const r = this.usecase.updatedTask(id, param);
    console.log(r);
    res.send(`user ${id} updated`);
  }

  async DeleteUser(req: any, res: { send: (_: string) => void }) {
    const id = req.params.id;

    const r = await this.usecase.deleteTask(id);
    console.log(r);
    res.send(`user ${id} deleted`);
  }
}
