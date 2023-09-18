import { RequestParam, Task } from "../domain/entity";

export interface InputPort {
    getAll():Promise<Task>
    // eslint-disable-next-line no-unused-vars
    getById(id:Number): Promise<Task>;
    // eslint-disable-next-line no-unused-vars
    createTask(param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    updateTask(id:Number, param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    deleteTask(id:Number): Promise<Response>;
}


export class Usecase {
    readonly inputPort:InputPort;
    constructor(inputport:InputPort) {
        this.inputPort = inputport;
    }
    
    async getAll():Promise<Task> {
        const tasks = await this.inputPort.getAll();       
        return tasks;
    }
    
    async getById(id: number):Promise<Task> {
        const task = await this.inputPort.getById(id);
        return task;
    }
    
    async createTask(param: RequestParam) {
        const status = await this.inputPort.createTask(param);
        return status;
    }
    
    async updatedTask(id: number, param: RequestParam) {
        const status = await this.inputPort.updateTask(id,param);
        return status;
    }

    async deleteTask(id: number):Promise<Response> {
        const status = await this.inputPort.deleteTask(id);
        return status;
    }
}