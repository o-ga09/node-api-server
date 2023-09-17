const express = require('express');

const app = express();
const RootHandler = express.Router();
const UserHandler = express.Router();

// GET リクエスト
RootHandler.get('/',(req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Hello World !');
    console.log('rcv req !')
});

// パスパラメータを取得する
UserHandler.get('/:id',(req: any, res: { send: (arg0: string) => void; }) => {
    // res.send();
    const id = req.params.id;
    console.log('rcv id : ' + id);
    res.send('User with ID: ' + id);
});

// POST リクエスト
UserHandler.post('/',express.json(),(req: any, res: { send: (arg0: string) => void; }) => {
    const name:string = req.body.name;
    const password:string = req.body.password;

    console.log('===============');
    console.log('request name : ' + name);
    console.log('request password : ' + password);
    console.log('============== ');
    res.send('user registered');
});

// PUT リクエスト
UserHandler.put('/:id',express.json(),(req: any, res: { send: (arg0: string) => void; }) => {
    const id = req.params.id;
    const name:string = req.body.name;
    const password:string = req.body.password;

    console.log('===============');
    console.log('request name : ' + name);
    console.log('request password : ' + password);
    console.log('============== ');
    res.send(`user ${id} updated`);
});

// DELETE リクエスト
UserHandler.delete('/:id',express.json(),(req: any, res: { send: (arg0: string) => void; }) => {
    const id = req.params.id;
    const name:string = req.body.name;
    const password:string = req.body.password;

    console.log('===============');
    console.log('request name : ' + name);
    console.log('request password : ' + password);
    console.log('============== ');
    res.send(`user ${id} deleted`);
});

const apiRouter = express.Router();

apiRouter.use('/',RootHandler);
apiRouter.use('/users',UserHandler);

app.use('/api/v1',apiRouter);
app.listen(3000, () => {
    console.log('starting server :3000');
});