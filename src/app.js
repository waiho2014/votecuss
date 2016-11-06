import webServer from './webServer';
import database  from './database';
import {
	serverConfig
} from './configs';

export default class App {
	constructor() {
		this.webServer = webServer;
		this.database = database;
	}

	start() {
		this.webServer.listen(serverConfig.port);
	}
}