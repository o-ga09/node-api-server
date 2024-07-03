import { DriverTask, RequestDriverParam, ResponseDriver } from "../../driver/TaskDriver";

export interface ITaskDriver {
    getAll(): Promise<DriverTask[]>;
    // eslint-disable-next-line no-unused-vars
    getById(id: number): Promise<DriverTask>;
    // eslint-disable-next-line no-unused-vars
    createTask(param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    updateTask(id: number, param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    deleteTask(id: Number): Promise<ResponseDriver>;
  }