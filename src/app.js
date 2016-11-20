import Mix         from 'mixwith';

import webServer    from './webServer';
import databaseConn from './database';
import redisClient  from './redisClient';
import mailer       from './mailer';
import { server }   from './configs';
import controllers  from './controllers';

export default class App extends Mix().with(controllers) {

	constructor() {
		this.webServer   = webServer(this);
		this.database    = null;
		this.redisClient = redisClient;
		this.mailer      = mailer;
	}

	start() {
		let self = this;
		databaseConn.connect().then(conn => {
			self.database = conn.db;
			conn.importModels();
			self.webServer.listen(server.port);
		});
	}

}
