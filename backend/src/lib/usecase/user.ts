import { RequestParam } from "../domain/types";
import { User, UserId } from "../domain/user/entity";
import { IUserInterface } from "./interface/user";

export class UserUsecase {
    readonly inputport: IUserInterface;

    constructor(inputport: IUserInterface) {
        this.inputport = inputport;
    }
    async getAll(): Promise<User[]> {
        const Users = await this.inputport.getAll();
        return Users;
      }
    
      async getById(id: number): Promise<User> {
        const userId = new UserId(id);
        const User = await this.inputport.getById(userId);
        return User;
      }
    
      async createUser(param: RequestParam):Promise<Response> {
        const status = await this.inputport.createUser(param);
        return status;
      }
    
      async updatedUser(id: number, param: RequestParam):Promise<Response> {
        const userId = new UserId(id);
        const status = await this.inputport.updateUser(userId, param);
        return status;
      }
    
      async deleteUser(id: number):Promise<Response> {
        const userId = new UserId(id);
        const status = await this.inputport.deleteUser(userId);
        return status;
      }
}