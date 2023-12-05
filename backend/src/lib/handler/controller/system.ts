export class HealthCheckController {
  healthCheck(_: any, res: { send: (_: string) => void }) {
    res.send('OK');
  }
}
