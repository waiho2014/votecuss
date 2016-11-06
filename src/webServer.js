import koa     from 'koa';
import koajwt  from 'koa-jwt';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import redis   from 'koa-redis';

let reqLtnr = new koa();

reqLtnr.use(convert(session({
	store: redis()
})));

reqLtnr.use(koajwt({
	secret : 'this is a secret'
}));

reqLtnr.use()

export default http.createServer(reqLtnr.callback());