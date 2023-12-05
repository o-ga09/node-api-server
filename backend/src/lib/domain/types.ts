import { TaskName, TaskDesc, TaskStatus } from "./task/entity";


  
export class RequestParam {
  readonly taskName: TaskName;
  readonly taskDesc: TaskDesc;
  readonly taskStatus: TaskStatus;
  
  constructor(name: string, desc: string, status: number) {
    this.taskName = new TaskName(name);
    this.taskDesc = new TaskDesc(desc);
    this.taskStatus = new TaskStatus(status);
  }
}