import { describe, expect, test } from "bun:test";
import { DriverTask, TaskDriverImpl } from "../TaskDriver";

describe("タスク一覧を取得する", () => {
    test("正常系 - 空の結果が返ること", async () => {
        const taskDriver = new TaskDriverImpl();
        const expected = await taskDriver.getAll();
        const actual:DriverTask[] = [];
        expect(actual).toEqual(expected);
    });
});

describe("タスクをIdで取得する", () => {
    test("任意の１つのタスクが返ること", async () => {
        const taskDriver = new TaskDriverImpl();     
        const expected = await taskDriver.getById(1);
        const testDate = new Date(2023,8,18,13,56,8);
        const testResult = new DriverTask(1,"test","hoge",1,testDate,testDate);
        expect(testResult).toEqual(expected);
    });
});