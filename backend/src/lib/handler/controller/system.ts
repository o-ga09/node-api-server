import { logger } from "../../middleware/logger";

export class HealthCheckController {
  healthCheck(_: any, res: { send: (_: string) => void }) {
    logger.info('health check');
    res.send({ status: 'ok'} as any);
  }
}
