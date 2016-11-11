import Mix         from 'mixwith';

import webServer   from './webServer';
import database    from './database';
import redisClient from './redisClient';
import { server }  from './configs';
import controllers from './controllers';

export default class App extends Mix().with(controllers) {

	constructor() {
		this.webServer   = webServer.call(this);
		this.database    = database;
		this.redisClient = redisClient;
	}

	start() {
		this.webServer.listen(server.port);
	}

}