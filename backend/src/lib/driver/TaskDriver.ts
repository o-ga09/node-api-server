import { PrismaClient } from "@prisma/client";

/* eslint-disable no-unused-vars */
export interface TaskDriver {
    getAll():Promise<DriverTask[]>
    // eslint-disable-next-line no-unused-vars
    getById(id:number): Promise<DriverTask>;
    // eslint-disable-next-line no-unused-vars
    createTask(param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    updateTask(id:number, param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    deleteTask(id:Number): Promise<ResponseDriver>;
}

export class TaskDriverImpl implements TaskDriver {
    constructor(
        readonly prizma = new PrismaClient(),
    ) {}
    
    async getAll(): Promise<DriverTask[]> {
        const records = await this.prizma.task.findMany();
        const tasks = records.map((record) => {
            return new DriverTask(
                record.id,
                record.name,
                record.desc,
                record.status,
                record.createdAt,
                record.updatedAt,
            );
        });
        
        return tasks;
    }

    async getById(id: number): Promise<DriverTask> {
        const record = await this.prizma.task.findFirst({
            where: {
                id: id,
            }
        });

        if(record === null) {
            return new DriverTask(0,"","",0,new Date(),new Date());
        }

        const task = new DriverTask(record?.id,record?.name,record?.desc,record?.status,record?.createdAt,record?.updatedAt);
        return task;
    }
    createTask(param: RequestDriverParam): Promise<ResponseDriver> {
        throw new Error("Method not implemented.");
    }
    updateTask(id: number, param: RequestDriverParam): Promise<ResponseDriver> {
        throw new Error("Method not implemented.");
    }
    deleteTask(id: Number): Promise<ResponseDriver> {
        throw new Error("Method not implemented.");
    }

}

export class DriverTask {
    readonly id:number;
    readonly name:string;
    readonly desc:string;
    readonly status:number;
    readonly createdAt:Date;
    readonly updatedAt:Date;

    constructor(id:number,name:string,desc:string,status:number,createdAt:Date,updatedAt:Date) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export class RequestDriverParam {
    readonly name:string;
    readonly desc:string;
    readonly status:number;

    constructor(name:string,desc:string,status:number) {
        this.name = name;
        this.desc = desc;
        this.status = status;
    }
}

export class ResponseDriver {
    readonly status:string;
    readonly code :number;

    constructor(status:string,code:number) {
        this.status = status;
        this.code = code;
    }
}