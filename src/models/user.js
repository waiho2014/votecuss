import { Schema } from 'mongoose';
import bcrypt     from 'bcrypt-nodejs';
import debugger   from 'debug';
import util       from 'util';

const debug = debugger('user-model');

let { ObjectId } = Schema.Types;


const userSchema = new Schema({
    username     : { type : String, unique : true, required : true },
    passwordHash : { type : String, required : true },
    email        : { type : String, unique : true, required : true },
    activatedAt  : { type : Date }
});

userSchema.virtual('password').set(function(password) {
    let hash = bcrypt.hashSync(password);
	this.passwordHash = hash;
});

export default userSchema;
