// fastify server with esm support

import fastify from 'fastify';
import fastifyUnderPressure from '@fastify/under-pressure';

const server = fastify();

server.register(fastifyUnderPressure, {
  maxEventLoopDelay: 200,
  maxEventLoopUtilization: 0.80
});

server.register(import('./routes.js'));

await server.listen({port: 3000});



