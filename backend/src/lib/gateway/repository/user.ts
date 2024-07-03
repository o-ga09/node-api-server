import { DriverUser, RequestDriverParam, ResponseDriver } from "../../driver/User";

export interface IUserDriver {
    getAll(): Promise<DriverUser[]>;
    // eslint-disable-next-line no-unused-vars
    getById(id: number): Promise<DriverUser>;
    // eslint-disable-next-line no-unused-vars
    createUser(param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    updateUser(id: number, param: RequestDriverParam): Promise<ResponseDriver>;
    // eslint-disable-next-line no-unused-vars
    deleteUser(id: Number): Promise<ResponseDriver>;
  }