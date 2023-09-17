import express from 'express';
import { RootController } from './controller/system';
import { UserController } from './controller/user';


export class Server {
    readonly app = express();
    readonly RootHandler = express.Router();
    readonly UserHandler = express.Router();
    readonly apiRouter = express.Router();
    readonly r = new RootController();
    readonly u = new UserController();
    
    constructor() {
        this.apiRouter.use('/', this.RootHandler);
        this.apiRouter.use('/users', this.UserHandler);
    }

    Run() {
        // GET リクエスト
        this.RootHandler.get('/', this.r.healthCheck);
        
        // パスパラメータを取得する
        this.UserHandler.get('/:id',this.u.getAllUsers);
        
        // POST リクエスト
        this.UserHandler.post('/:id',this.u.CreateUser);
        
        // PUT リクエスト
        this.UserHandler.put('/:id',this.u.UpdateUser);
        
        // DELETE リクエスト
        this.UserHandler.delete('/:id',this.u.DeleteUser);
        
        
        this.app.use('/api/v1', this.apiRouter);
        this.app.listen(3000, () => {
          console.log('starting server :3000');
        });
    }
    
}

