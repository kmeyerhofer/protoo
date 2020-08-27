// const { version } = require('../package.json');
import { version } from '../package.json';
// const Peer = require('./Peer');
import Peer from './Peer';
// const WebSocketTransport = require('./transports/WebSocketTransport');
import WebSocketTransport from './transports/WebSocketTransport';

/**
 * Expose mediasoup-client version.
 *
 * @type {String}
 */
exports.version = version;

/**
 * Expose Peer class.
 *
 * @type {Class}
 */
exports.Peer = Peer;

/**
 * Expose WebSocketTransport class.
 *
 * @type {Class}
 */
// exports.WebSocketTransport = WebSocketTransport;
export default WebSocketTransport;
