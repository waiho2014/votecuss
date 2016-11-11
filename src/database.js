import mongoose from 'mongoose';
import { mongoDB } from './configs';

export default mongoose.connect(mongoDB.uri, mongoDB.options); 