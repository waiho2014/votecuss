import { Schema } from 'mongoose';
import debugger   from 'debug';

const debug = debugger('category-model');

let { ObjectId } = Schema.Types;

const commentSchema = new Schema({
    author : {
        type : ObjectId,
        ref : 'user'
    },
    issue : {
        type : ObjectId,
        ref : 'issue'
    },
    commentId : {
        type : String,
        required : true
    },
    index : {
        type : Number,
        default : 0,
        required : true
    }
}, {
    timestamp : true
});

export default commentSchema;
