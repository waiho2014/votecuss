export const server = {
	host : process.env.host || 'localhost',
	port : process.env.port || 4321
};

export const mongoDB = {
	uri : process.env.mongodb_uri, //Connection string is stored in env variable
	options : {
		// TODO: Other options
	}
};

export const redis = {
	options : {
		host : process.env.redis_host,
		port : process.env.redis_port
		// TODO: Other options
	}
};

