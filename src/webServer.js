import koa      from 'koa';
import koajwt   from 'koa-jwt';
import convert  from 'koa-convert';
import session  from 'koa-generic-session';
import koaRedis from 'koa-redis';

export default function() {
	let reqLtnr = new koa();

	reqLtnr.use(convert(session({
		store: koaRedis({
			client : this.redisClient
		})
	})));

	reqLtnr.use(koajwt({
		secret : 'this is a secret'
	}));

	// TODO: Add other middleware
	reqLtnr.use(this.testMiddleware)

	return http.createServer(reqLtnr.callback());
}