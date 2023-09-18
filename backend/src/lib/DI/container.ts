import { TaskDriverImpl } from "../driver/TaskDriver";
import { PrismaClient } from "@prisma/client";
import { TaskGateway } from "../gateway/TaskGateway";
import { Usecase } from "../usecase/usecase";
import { UserController } from "../handler/controller/user";

export class UserContainer {
    readonly handler:UserController;
    constructor(
    ) {
        const prisma = new PrismaClient();
        const driver = new TaskDriverImpl(prisma);
        const gateway = new TaskGateway(driver);
        const usecase = new Usecase(gateway);
        this.handler = new UserController(usecase);
    }
}