export class User {
    readonly userid: UserId;
    readonly userName: UserName;
    readonly userRank: UserRank;
    readonly userRegisteredAt: UserRegisteredAt;

    constructor(id:Number,name:string,rank:Number) {
        this.userid = new UserId(id);
        this.userName = new UserName(name);
        this.userRank = new UserRank(rank);
        this.userRegisteredAt = new UserRegisteredAt();
    }
}

export class Task {
    readonly taskId: TaskId;
    readonly taskName: TaskName;
    readonly taskDesc: TaskDesc;
    readonly taskStatus: TaskStatus;
    readonly taskCreatedAt: TaskCreatedAt;
    readonly taskUpdatedAt: TaskUpdatedAt;

    constructor(id:Number,name:string,desc:string,status:Number) {
        this.taskId = new TaskId(id);
        this.taskName = new TaskName(name);
        this.taskDesc = new TaskDesc(desc);
        this.taskStatus = new TaskStatus(status);
        this.taskCreatedAt = new TaskCreatedAt();
        this.taskUpdatedAt = new TaskUpdatedAt();
    }
}

class UserId {
    readonly Value: Number;

    constructor(value:Number) {
        this.Value = value;
    }
}

class UserName {
    readonly Value: string;

    constructor(value:string) {
        this.Value = value;
    }
}

class UserRank {
    readonly Value: Number;

    constructor(value:Number) {
        this.Value = value;
    }
}

class UserRegisteredAt {
    readonly Value: string;

    constructor() {
        this.Value = new Date().toISOString();
    }
}

class TaskId {
    readonly Value: Number;

    constructor(value:Number) {
        this.Value = value;
    }
}

class TaskName {
    readonly Value: string;

    constructor(value:string) {
        this.Value = value;
    }
}

class TaskDesc {
    readonly Value: string;

    constructor(value:string) {
        this.Value = value;
    }
}

class TaskStatus {
    readonly Value: Number;

    constructor(value:Number) {
        this.Value = value;
    }
}

class TaskCreatedAt {
    readonly Value: string;

    constructor() {
        this.Value = new Date().toISOString();
    }
}

class TaskUpdatedAt {
    readonly Value: string;

    constructor() {
        this.Value = new Date().toISOString();
    }
}