const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
// ${env.accountName}:${env.key}@
const mongoUri = `mongodb://localhost:${env.port}/${env.databaseName}`;

function connect() {
  mongoose.set('useCreateIndex', true);
  return mongoose.connect(
    mongoUri,
    {
      useNewUrlParser: true
    }
  );
}

module.exports = {
  connect,
  mongoose
};
