import { Logger } from './logger';
import { createServer } from './server';

async function main() {
  const logger = new Logger(main.name);
  const port = 8000;
  const server = createServer(port);
  server.listen(port);
  logger.log(`Server started on port ${port}`);
}

main().catch(console.error);
