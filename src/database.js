import _        from 'lodash';
import mongoose from 'mongoose';
import Promise  from 'bluebird';
import debugger from 'debug';

import { mongoDB } from './configs';
import models      from './models';
import { uppercaseFirst } from './utils';

const debug = debugger('database-connection');

export default {
    db : null,
    connect : function() {
        return new Promise((resolve, reject) => {
            debug('Connecting to mongoDB');
            mongoose.connect(mongoDB.uri, mongoDB.options);
            let db = mongoose.connection;
            db.on('error', function(err) {
                debug(util.inspect(err, { depth : null }));
            });
            db.once('connected', funciton() {
                debug('Connected');
                self.db = db;
                resolve(self);
            });
        });
    },
    importModels : function() {
        let self = this;
        _.forEach(models.bases, (baseModel, key) => {
            let model = self.db.model(key, baseModel);
            _.forEach(models.discriminators[key] || {}, (discriminator, key) => {
                model.discriminator(key, discriminator);
            });
        });
    }
}
