import { describe, expect, jest, test } from "bun:test";
import { DriverTask, ResponseDriver, TaskDriver } from "../../driver/TaskDriver";
import { TaskGateway } from "../TaskGateway";
import { RequestParam, Response, Task, TaskId } from "../../domain/entity";

describe("タスク一覧を取得する", () => {
    test("正常系 - 空の結果が返ること", async () => {
        const taskDriver = {} as TaskDriver;
        const getAllMock = jest.fn();
        taskDriver.getAll = getAllMock;
        getAllMock.mockResolvedValueOnce([]);
        
        const gateway = new TaskGateway(taskDriver);
        const expected = await gateway.getAll();
        const actual:Task[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("タスクをIdで取得する", () => {
    test("正常系 - 空の結果が返ること", async () => {
        const taskDriver = {} as TaskDriver;
        const getByIdMock = jest.fn();
        taskDriver.getById = getByIdMock;

        const mockDate = new Date(2023,9,18,1,2,3);
        const mockResult = new DriverTask(1,"test","hoge",1,mockDate,mockDate);
        getByIdMock.mockResolvedValueOnce(mockResult);
        
        const task = new Task(1,"test","hoge",1,mockDate,mockDate);
        const gateway = new TaskGateway(taskDriver);
        const taskId = new TaskId(1);
        const expected = await gateway.getById(taskId);
        expect(task).toEqual(expected);
    });
});

describe("タスクを作成する", () => {
    test("正常系 - 任意の１つのタスクが作成してOKが返ること", async () => {
        const taskDriver = {} as TaskDriver;
        const createTaskMock = jest.fn();
        taskDriver.createTask = createTaskMock;

        const mockResult = new ResponseDriver("created",200);
        createTaskMock.mockResolvedValueOnce(mockResult);
        
        const task = new RequestParam("test","hoge",1);
        const response = new Response("created",200);
        const gateway = new TaskGateway(taskDriver);
        const expected = await gateway.createTask(task);
        expect(response).toEqual(expected);
    });
});

describe("タスクを編集する", () => {
    test("正常系 - 任意の１つのタスクが作成してOKが返ること", async () => {
        const taskDriver = {} as TaskDriver;
        const updateTaskMock = jest.fn();
        taskDriver.updateTask = updateTaskMock;

        const mockResult = new ResponseDriver("updated",200);
        updateTaskMock.mockResolvedValueOnce(mockResult);
        
        const task = new RequestParam("test","hoge",1);
        const response = new Response("updated",200);
        const gateway = new TaskGateway(taskDriver);
        const taskId = new TaskId(1);
        const expected = await gateway.updateTask(taskId,task);
        expect(response).toEqual(expected);
    });
});

describe("タスクを削除する", () => {
    test("正常系 - 任意の１つのタスクが削除してOKが返ること", async () => {
        const taskDriver = {} as TaskDriver;
        const deleteTaskMock = jest.fn();
        taskDriver.deleteTask = deleteTaskMock;

        const mockResult = new ResponseDriver("deleted",200);
        deleteTaskMock.mockResolvedValueOnce(mockResult);
        
        const response = new Response("deleted",200);
        const gateway = new TaskGateway(taskDriver);
        const taskId = new TaskId(1);
        const expected = await gateway.deleteTask(taskId);
        expect(response).toEqual(expected);
    });
});