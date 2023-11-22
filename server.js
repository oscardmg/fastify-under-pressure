// fastify server with esm support

import fastify from 'fastify';

const server = fastify();

server.register(import('./routes.js'));

await server.listen({port: 3000});



