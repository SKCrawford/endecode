import { PORT } from './config';
import { Logger } from './logger';
import { createServer } from './server';

async function main() {
  const logger = new Logger(main.name);
  const server = createServer(PORT);
  server.listen(PORT);
  logger.log(`Server started on port ${PORT}`);
}

main().catch(console.error);
