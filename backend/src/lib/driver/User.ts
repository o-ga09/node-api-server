import { PrismaClient } from '@prisma/client';
import { IUserDriver } from '../gateway/repository/user';

export class UserDriverImpl implements IUserDriver {
  // eslint-disable-next-line no-unused-vars
  constructor(readonly prizma: PrismaClient) {}

  async getAll(): Promise<DriverUser[]> {
    const records = await this.prizma.task.findMany();
    const tasks = records.map((record) => {
      return new DriverUser(
        record.id,
        record.name,
        record.desc,
        record.status,
        record.created_at,
        record.updated_at
      );
    });

    return tasks;
  }

  async getById(id: number): Promise<DriverUser> {
    const record = await this.prizma.task.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (record === null) {
      return new DriverUser(0, '', '', 0, new Date(), new Date());
    }

    const task = new DriverUser(
      record?.id,
      record?.name,
      record?.desc,
      record?.status,
      record?.created_at,
      record?.updated_at
    );
    return task;
  }

  async createUser(param: RequestDriverParam): Promise<ResponseDriver> {
    await this.prizma.task.create({
      data: {
        name: param.name,
        desc: param.desc,
        status: param.status,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
    const status = new ResponseDriver('Created', 200);
    return status;
  }

  async updateUser(id: number, param: RequestDriverParam): Promise<ResponseDriver> {
    await this.prizma.task.update({
      where: {
        id: Number(id),
      },
      data: {
        name: param.name,
        desc: param.desc,
        status: param.status,
        updated_at: new Date(),
      },
    });
    const status = new ResponseDriver('Updated', 200);
    return status;
  }

  async deleteUser(id: number): Promise<ResponseDriver> {
    await this.prizma.task.delete({
      where: {
        id: Number(id),
      },
    });
    const status = new ResponseDriver('Deleted', 200);
    return status;
  }
}

export class DriverUser {
  readonly id: number;
  readonly name: string;
  readonly desc: string;
  readonly status: number;
  readonly created_at: Date;
  readonly updated_at: Date;

  constructor(
    id: number,
    name: string,
    desc: string,
    status: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.status = status;
    this.created_at = createdAt;
    this.updated_at = updatedAt;
  }
}

export class RequestDriverParam {
  readonly name: string;
  readonly desc: string;
  readonly status: number;

  constructor(name: string, desc: string, status: number) {
    this.name = name;
    this.desc = desc;
    this.status = status;
  }
}

export class ResponseDriver {
  readonly status: string;
  readonly code: number;

  constructor(status: string, code: number) {
    this.status = status;
    this.code = code;
  }
}
