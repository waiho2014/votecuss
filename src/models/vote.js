import _ from 'lodash';
import { Schema } from 'mongoose';
import debugger   from 'debug';

const debug = debugger('category-model');

let { ObjectId } = Schema.Types;


export default reasons => {
    return new Schema({
        voter : {
            type : ObjectId,
            ref : 'user'
        },
        reason : {
            type : String,
            enum : reasons
        }
    }, {
        timestamp : true
    });
};

export validator = v => _.uniqBy(v, 'voter');
export message = 'Each user can only vote once';
