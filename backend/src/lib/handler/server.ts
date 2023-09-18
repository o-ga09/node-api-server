import express from 'express';
import { RootController } from './controller/system';
import { UserContainer } from '../DI/container';


export class Server {
    readonly app = express();
    readonly RootHandler = express.Router();
    readonly UserHandler = express.Router();
    readonly apiRouter = express.Router();
    readonly r = new RootController();
    readonly u = new UserContainer();
    
    constructor() {
        this.apiRouter.use('/', this.RootHandler);
        this.apiRouter.use('/users', this.UserHandler);
    }

    Run() {
        // GET リクエスト
        this.RootHandler.get('/', this.r.healthCheck);
        this.UserHandler.get('/',this.u.handler.getAllUsers);
        
        // パスパラメータを取得する
        this.UserHandler.get('/:id',this.u.handler.getById);
        
        // POST リクエスト
        this.UserHandler.post('/:id',this.u.handler.CreateUser);
        
        // PUT リクエスト
        this.UserHandler.put('/:id',this.u.handler.UpdateUser);
        
        // DELETE リクエスト
        this.UserHandler.delete('/:id',this.u.handler.DeleteUser);
        
        
        this.app.use('/api/v1', this.apiRouter);
        this.app.listen(3000, () => {
          console.log('starting server :3000');
        });
    }
    
}

