import { afterEach, describe, expect, jest, test } from 'bun:test';
import { DriverTask, RequestDriverParam, ResponseDriver, TaskDriverImpl } from '../TaskDriver';
import { PrismaClient } from '@prisma/client';

const mockPrisma = {
  task: {
    findMany: jest.fn(),
    findFirst: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
} as unknown as PrismaClient;

describe('タスク一覧を取得する', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('正常系 - 空の結果が返ること', async () => {
    const mockRecords = [
      {
        id: 1,
        name: 'Task 1',
        desc: 'Description 1',
        status: 'Completed',
        created_at: new Date('2023-09-05T10:00:00Z'),
        updated_at: new Date('2023-09-05T11:00:00Z'),
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

describe('タスクをIdで取得する', () => {
  test('任意の１つのタスクが返ること', async () => {
    const testDate = new Date(2023, 8, 18, 13, 56, 8);
    const testResult = new DriverTask(1, 'test', 'hoge', 1, testDate, testDate);
    const driverTaskService = new TaskDriverImpl(mockPrisma);
    const findFirst = mockPrisma.task.findFirst as jest.Mock<any>;
    findFirst.mockResolvedValue(testResult);

    const expected = await driverTaskService.getById(1);
    expect(testResult).toEqual(expected);
  });
});

describe('タスクを作成する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const testDate = new Date(2023, 8, 18, 13, 56, 8);
    const testResult = new DriverTask(1, 'test', 'hoge', 1, testDate, testDate);
    const driverTaskService = new TaskDriverImpl(mockPrisma);
    const create = mockPrisma.task.create as jest.Mock<any>;
    create.mockResolvedValue(testResult);

    const param = new RequestDriverParam('test', 'hoge', 1);
    const expected = new ResponseDriver('Created', 200);
    const actual = await driverTaskService.createTask(param);
    expect(actual).toEqual(expected);
  });
});

describe('タスクを編集する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const testDate = new Date(2023, 8, 18, 13, 56, 8);
    const testResult = new DriverTask(1, 'test', 'hoge', 1, testDate, testDate);
    const driverTaskService = new TaskDriverImpl(mockPrisma);
    const update = mockPrisma.task.update as jest.Mock<any>;
    update.mockResolvedValue(testResult);

    const param = new RequestDriverParam('test', 'hoge', 1);
    const expected = new ResponseDriver('Updated', 200);
    const actual = await driverTaskService.updateTask(1, param);
    expect(actual).toEqual(expected);
  });
});

describe('タスクを削除する', () => {
  test('正常系 - 任意の１つのタスクが削除してOKが返ること', async () => {
    const testDate = new Date(2023, 8, 18, 13, 56, 8);
    const testResult = new DriverTask(1, 'test', 'hoge', 1, testDate, testDate);
    const driverTaskService = new TaskDriverImpl(mockPrisma);
    const deleted = mockPrisma.task.delete as jest.Mock<any>;
    deleted.mockResolvedValue(testResult);

    const expected = new ResponseDriver('Deleted', 200);
    const actual = await driverTaskService.deleteTask(1);
    expect(actual).toEqual(expected);
  });
});
