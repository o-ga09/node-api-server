import { TaskDriverImpl } from "../driver/TaskDriver";
import { PrismaClient } from "@prisma/client";
import { TaskGateway } from "../gateway/TaskGateway";
import { Usecase } from "../usecase/usecase";

const prisma = new PrismaClient();
const driver = new TaskDriverImpl(prisma);
const gateway = new TaskGateway(driver);
export const usecase = new Usecase(gateway);