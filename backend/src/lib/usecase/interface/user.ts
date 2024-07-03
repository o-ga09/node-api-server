import { RequestParam } from "../../domain/types";
import { User, UserId } from "../../domain/user/entity";


export interface IUserInterface {
    getAll(): Promise<User[]>;
    // eslint-disable-next-line no-unused-vars
    getById(id: UserId): Promise<User>;
    // eslint-disable-next-line no-unused-vars
    createUser(param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    updateUser(id: UserId, param: RequestParam): Promise<Response>;
    // eslint-disable-next-line no-unused-vars
    deleteUser(id: UserId): Promise<Response>;
  }