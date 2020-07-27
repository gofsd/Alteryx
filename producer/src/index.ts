import * as broker from './broker'
import * as process from 'process'
import * as ormconfig from './ormconfig'
const conf = ormconfig.default;
const env = process.env;

broker.start({env, conf});


