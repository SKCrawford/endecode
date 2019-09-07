import { createServer } from './server';

async function main() {
  const port = 8000;
  const server = createServer(port);
  server.listen(port);
}

main().catch(console.error);
