import express from 'express';
import { HealthCheckController } from './controller/system';
import { usecase } from '../DI/container';
import { TaskController } from './controller/task';
import { logger } from '../middleware/logger';

export class Server {
  readonly app = express();
  readonly HealthCheckHandler = express.Router();
  readonly TaskHandler = express.Router();
  readonly apiRouter = express.Router();
  readonly r = new HealthCheckController();
  readonly t = new TaskController(usecase);
  
  constructor() {
    this.apiRouter.use('/', this.HealthCheckHandler);
    this.apiRouter.use('/tasks', this.TaskHandler);
  }
  
  Run() {
    
    // GET リクエスト
    this.HealthCheckHandler.get('/', this.r.healthCheck);
    this.TaskHandler.get('/', this.t.getAllTasks.bind(this.t));

    // パスパラメータを取得する
    this.TaskHandler.get('/:id', this.t.getById.bind(this.t));

    // POST リクエスト
    this.TaskHandler.post('/', this.t.CreateTask.bind(this.t));

    // PUT リクエスト
    this.TaskHandler.put('/:id', this.t.UpdateTask.bind(this.t));

    // DELETE リクエスト
    this.TaskHandler.delete('/:id', this.t.DeleteTask.bind(this.t));

    this.app.use(express.json());
    this.app.use('/api/v1', this.apiRouter);
    const server = this.app.listen(8080, () => {
      logger.info('starting server :8080');
    });

    process.on('SIGTERM', () => {
      server.close(() => {
        logger.info('SIGTERM signal received.');
      });
    });

    process.on('SIGINT', () => {
      server.close(() => {
        logger.info('SIGINT signal received.');
      });
    });

    process.on('SIGKILL', () => {
      server.close(() => {  
        logger.info('SIGKILL signal received.');
      });
    });
  }
}
