import { Schema } from 'mongoose';
import debugger   from 'debug';

const debug = debugger('category-model');

let { ObjectId } = Schema.Types;

const issueSchema = new Schema({
    title : {
        type     : String,
        unique   : true,
        required : true
    },
    category : {
        type : ObjectId,
        required : true
    },
    author : {
        type     : ObjectId,
        ref      : 'user',
        required : true
    },
    votes : {
        type : [ObjectId],
        ref  : 'user'
    },
    open : {
        type    : Boolean,
        default : false
    }
}, {
    timestamp : true
});

// Add open issue hook
issueSchema.post('save', async function(issue) {
    if (!issue.isModified('votes') || issue.open)
        return;
    issue = await issue.populate('category').execPopulate();
    if (issue.votes.length >= issue.category.issueMinVote) {
        issue.open = true;
        await issue.save();
    }
});

export default issueSchema;
