import { setTimeout as sleep } from 'timers/promises';
import atomicSleep from 'atomic-sleep';


export default async function (app) {
    app.get('/', async (req, res) => {
      // simulate a database query  
      await sleep(10);
        
      // simulate some syncronous work
      atomicSleep(20);
      return 'Hello World!';
    });
}

