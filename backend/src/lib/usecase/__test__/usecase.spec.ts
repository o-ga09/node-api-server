import { describe, expect, jest, test } from 'bun:test';
// import { when } from "jest-when";
import { RequestParam, Response, Task } from '../../domain/entity';
import { InputPort, Usecase } from '../usecase';

describe('タスク一覧を取得する', () => {
  test('正常系 - 空の結果が返ること', async () => {
    const inputPort = {} as InputPort;
    const getAllMock = jest.fn();
    inputPort.getAll = getAllMock;
    getAllMock.mockResolvedValueOnce([]);
    // when(getAllMock).calledWith().mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.getAll();
    const actual: Task[] = [];
    expect(actual).toEqual(expected);
  });
});

describe('タスクをIdで取得する', () => {
  test('正常系 - 任意の１つのタスクが返ること', async () => {
    const inputPort = {} as InputPort;
    const getByIdMock = jest.fn();
    inputPort.getById = getByIdMock;

    const mockDate = new Date(2023, 9, 18, 1, 2, 3);
    const mockResult = new Task(1, 'test', 'hoge', 1, mockDate, mockDate);
    getByIdMock.mockResolvedValueOnce(mockResult);
    // when(getAllMock).calledWith().mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.getById(1);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを作成する', () => {
  test('正常系 - 任意の１つのタスクが作成してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const createTaskMock = jest.fn();
    inputPort.createTask = createTaskMock;
    const mockResult = new Response('Created', 200);
    createTaskMock.mockResolvedValueOnce(mockResult);
    // when(getAllMock).calledWith().mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const arg = new RequestParam('test', 'hoge', 0);
    const expected = await usecase.createTask(arg);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを編集する', () => {
  test('正常系 - 任意の１つのタスクが編集してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const updateTaskMock = jest.fn();
    inputPort.updateTask = updateTaskMock;
    const mockResult = new Response('Updated', 200);
    updateTaskMock.mockResolvedValueOnce(mockResult);
    // when(getAllMock).calledWith().mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const arg = new RequestParam('test', 'hoge', 0);
    const expected = await usecase.updatedTask(1, arg);
    expect(mockResult).toEqual(expected);
  });
});

describe('タスクを削除する', () => {
  test('正常系 - 任意の１つのタスクが削除してOKが返ること', async () => {
    const inputPort = {} as InputPort;
    const deleteTaskMock = jest.fn();
    inputPort.deleteTask = deleteTaskMock;
    const mockResult = new Response('Deleted', 200);
    deleteTaskMock.mockResolvedValueOnce(mockResult);
    // when(getAllMock).calledWith().mockResolvedValueOnce([]);

    const usecase = new Usecase(inputPort);
    const expected = await usecase.deleteTask(1);
    expect(mockResult).toEqual(expected);
  });
});
