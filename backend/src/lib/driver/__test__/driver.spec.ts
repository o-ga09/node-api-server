import { afterEach, describe, expect, jest, test } from "bun:test";
import { DriverTask, TaskDriverImpl } from "../TaskDriver";
import { PrismaClient } from '@prisma/client';

const mockPrisma = {
    task: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
    },
} as unknown as PrismaClient;

describe("タスク一覧を取得する", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test("正常系 - 空の結果が返ること", async () => {
        const mockRecords = [
            {
              id: 1,
              name: 'Task 1',
              desc: 'Description 1',
              status: 'Completed',
              createdAt: new Date('2023-09-05T10:00:00Z'),
              updatedAt: new Date('2023-09-05T11:00:00Z'),
            },
            // Add more mock records as needed
        ];
      
        const driverTaskService = new TaskDriverImpl(mockPrisma);
        const findmany = mockPrisma.task.findMany as jest.Mock<any>;
        findmany.mockResolvedValue(mockRecords);


        const expected = await driverTaskService.getAll();
        expect(mockRecords).toEqual(expected);
    });
});

describe("タスクをIdで取得する", () => {
    test("任意の１つのタスクが返ること", async () => {
        const testDate = new Date(2023,8,18,13,56,8);
        const testResult = new DriverTask(1,"test","hoge",1,testDate,testDate);
        const driverTaskService = new TaskDriverImpl(mockPrisma);
        const findFirst = mockPrisma.task.findFirst as jest.Mock<any>;
        findFirst.mockResolvedValue(testResult);
        
        const expected = await driverTaskService.getById(1);
        expect(testResult).toEqual(expected);
    });
});