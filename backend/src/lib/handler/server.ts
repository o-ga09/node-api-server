import express from 'express';
import { RootController } from './controller/system';
import { usecase } from '../DI/container';
import { UserController } from './controller/user';


export class Server {
    readonly app = express();
    readonly RootHandler = express.Router();
    readonly UserHandler = express.Router();
    readonly apiRouter = express.Router();
    readonly r = new RootController();
    readonly u = new UserController(usecase);
    
    constructor() {
        this.apiRouter.use('/', this.RootHandler);
        this.apiRouter.use('/users', this.UserHandler);
    }

    Run() {
        // GET リクエスト
        this.RootHandler.get('/', this.r.healthCheck);
        this.UserHandler.get('/',this.u.getAllUsers.bind(this.u));
        
        // パスパラメータを取得する
        this.UserHandler.get('/:id',this.u.getById.bind(this.u));
        
        // POST リクエスト
        this.UserHandler.post('/',this.u.CreateUser.bind(this.u));
        
        // PUT リクエスト
        this.UserHandler.put('/:id',this.u.UpdateUser.bind(this.u));
        
        // DELETE リクエスト
        this.UserHandler.delete('/:id',this.u.DeleteUser.bind(this.u));
        
        this.app.use(express.json());
        this.app.use('/api/v1', this.apiRouter);
        this.app.listen(3000, () => {
          console.log('starting server :3000');
        });
    }
    
}

