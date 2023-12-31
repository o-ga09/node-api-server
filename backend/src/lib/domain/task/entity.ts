export class Task {
  readonly taskId: TaskId;
  readonly taskName: TaskName;
  readonly taskDesc: TaskDesc;
  readonly taskStatus: TaskStatus;
  readonly taskCreatedAt: TaskCreatedAt;
  readonly taskUpdatedAt: TaskUpdatedAt;

  constructor(
    id: number,
    name: string,
    desc: string,
    status: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.taskId = new TaskId(id);
    this.taskName = new TaskName(name);
    this.taskDesc = new TaskDesc(desc);
    this.taskStatus = new TaskStatus(status);
    this.taskCreatedAt = new TaskCreatedAt(createdAt);
    this.taskUpdatedAt = new TaskUpdatedAt(updatedAt);
  }
}


export class TaskId {
  readonly Value: number;

  constructor(value: number) {
    this.Value = value;
  }
}

export class TaskName {
  readonly Value: string;

  constructor(value: string) {
    this.Value = value;
  }
}

export class TaskDesc {
  readonly Value: string;

  constructor(value: string) {
    this.Value = value;
  }
}

export class TaskStatus {
  readonly Value: number;

  constructor(value: number) {
    this.Value = value;
  }
}

export class TaskCreatedAt {
  readonly Value: Date;

  constructor(createdat: Date) {
    this.Value = new Date(createdat);
  }
}

export class TaskUpdatedAt {
  readonly Value: Date;

  constructor(updatedAt: Date) {
    this.Value = new Date(updatedAt);
  }
}

export class Response {
  readonly status: string;
  readonly code: Number;

  constructor(status: string, code: Number) {
    this.status = status;
    this.code = code;
  }
}