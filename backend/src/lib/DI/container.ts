import { TaskDriverImpl } from '../driver/TaskDriver';
import { PrismaClient } from '@prisma/client';
import { TaskGateway } from '../gateway/TaskGateway';
import { TaskUsecase } from '../usecase/task';

const prisma = new PrismaClient();
const driver = new TaskDriverImpl(prisma);
const gateway = new TaskGateway(driver);
export const usecase = new TaskUsecase(gateway);
