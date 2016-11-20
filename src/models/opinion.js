import { Schema } from 'mongoose';
import debugger   from 'debug';

import createVoteSchema, { uniqUser, uniqUserMsg } from './vote';

const debug = debugger('category-model');

let { ObjectId } = Schema.Types;


const opinionSchema = new Schema({
    upVotes : [{
        type : createVoteSchema(['goodopinion'])
    }],
    downVotes : [{
        type : createVoteSchema(['badopinion'])
    }]
});

opinionSchema.pre('save', function(comment, next) {
    if (!comment.isModified('upVotes') && !comment.isModified('downVotes'))
        return;
    let { upVote, downVotes } = comment;
    if (uniqUser([...upVotes, ...downVotes]).length != upVotes.length + downVotes.length)
        return next(uniqUserMsg);
    return next();
});

export default opinionSchema;
