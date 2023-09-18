import { Usecase } from "../../usecase/usecase";

export class UserController {

    constructor(
        // eslint-disable-next-line no-unused-vars
        readonly usecase:Usecase,
    ) {}
    getAllUsers(req: any, res: { send: (_: string) => void }) {
        const id = req.params.id;

        console.log('===============');
        console.log('rcv id : ' + id);
        console.log('============== ');
        res.send('rcv id' + id);
    }

    getById(req: any, res: { send: (_: string) => void }) {
        const id = req.params.id;

        console.log('===============');
        console.log('rcv id : ' + id);
        console.log('============== ');
        res.send('rcv id' + id);
    }

    CreateUser(req: any, res: { send: (_: string) => void }) {
        const name: string = req.body.name;
        const password: string = req.body.password;

        console.log('===============');
        console.log('request name : ' + name);
        console.log('request password : ' + password);
        console.log('============== ');
        res.send('user registered');
    }

    UpdateUser(req: any, res: { send: (_: string) => void }) {
        const id = req.params.id;
        const name: string = req.body.name;
        const password: string = req.body.password;

        console.log('===============');
        console.log('request name : ' + name);
        console.log('request password : ' + password);
        console.log('============== ');
        res.send(`user ${id} updated`);
    }

    DeleteUser(req: any, res: { send: (_: string) => void }) {
        const id = req.params.id;
        const name: string = req.body.name;
        const password: string = req.body.password;

        console.log('===============');
        console.log('request name : ' + name);
        console.log('request password : ' + password);
        console.log('============== ');
        res.send(`user ${id} deleted`);
    }
}