import * as broker from './broker'
import * as process from 'process'
const env = process.env;

broker.start({ env });