import { Schema } from 'mongoose';
import debugger   from 'debug';

const debug = debugger('category-model');

let { ObjectId } = Schema.Types;

const categorySchema = new Schema({
    name : {
        type     : String,
        unique   : true,
        required : true
    },
    issueMinVote : {
        type    : Number,
        default : 0
    }
}, {
    timestamp : true
});

export default categorySchema;
