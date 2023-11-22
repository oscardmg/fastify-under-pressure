// fastify server with esm support

import fastify from 'fastify';
import fastifyUnderPressure from '@fastify/under-pressure';
import { setTimeout as sleep } from 'timers/promises';
import atomicSleep from 'atomic-sleep';

const server = fastify();

server.register(fastifyUnderPressure, {
  maxEventLoopDelay: 200,
  maxEventLoopUtilization: 0.80,

  // do nothing, let the request go through normally
  pressureHandler: (req, rep) => {},
});


server.get('/', async (req, res) => {
  // simulate a database query  
  await sleep(10);
  
  if(!server.isUnderPressure()) {
    // simulate some syncronous work
    atomicSleep(20);
  } else {
    // use cache value
  }
  return 'Hello World!';
});


await server.listen({port: 3000});
