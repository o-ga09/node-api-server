export class RootController {
  healthCheck(_: any, res: { send: (_: string) => void }) {
    console.log('Hello World');
    res.send('Hello World');
  }
}
