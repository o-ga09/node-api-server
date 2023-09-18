import { Task, RequestParam, Response, TaskId } from "../domain/entity";
import { RequestDriverParam, TaskDriver } from "../driver/TaskDriver";
import { InputPort } from "../usecase/usecase";

export class TaskGateway implements InputPort {
    readonly driver: TaskDriver;
    
    constructor(driver:TaskDriver) {
        this.driver = driver;
    }

    async getAll(): Promise<Task[]> {
        const taskdriver = await this.driver.getAll();
        const tasks = taskdriver.map((task) => {
            return new Task(task.id,task.name,task.desc,task.status,task.createdAt,task.updatedAt);
        });

        return tasks;
    }

    async getById(id: TaskId): Promise<Task> {
        const taskdriver = await this.driver.getById(id.Value);
        const task = new Task(taskdriver.id,taskdriver.name,taskdriver.desc,taskdriver.status,taskdriver.createdAt,taskdriver.updatedAt);
        return task;
    }

    async createTask(param: RequestParam): Promise<Response> {
        const driverParam = new RequestDriverParam(param.taskName.Value,param.taskDesc.Value,param.taskStatus.Value);
        const driverStatus = await this.driver.createTask(driverParam); 
        const status = new Response(driverStatus.status,driverStatus.code);
        return status;
    }

    async updateTask(id: TaskId, param: RequestParam): Promise<Response> {
        const driverParam = new RequestDriverParam(param.taskName.Value,param.taskDesc.Value,param.taskStatus.Value);
        const driverStatus = await this.driver.updateTask(id.Value,driverParam);
        const status = new Response(driverStatus.status,driverStatus.code);
        return status;
    }

    async deleteTask(id: TaskId): Promise<Response> {
        const driverStatus = await this.driver.deleteTask(id.Value);
        const status = new Response(driverStatus.status,driverStatus.code);
        return status;
    }


}