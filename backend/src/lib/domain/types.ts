import { TaskName, TaskDesc, TaskStatus } from "./task/entity";

export class Response {
    readonly status: string;
    readonly code: Number;
  
    constructor(status: string, code: Number) {
      this.status = status;
      this.code = code;
    }
  }
  
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