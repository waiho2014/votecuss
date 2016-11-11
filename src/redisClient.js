import Redis from 'redis';
import { redis } from './configs';

export default Redis.createClient(redis)