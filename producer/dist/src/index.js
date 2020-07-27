"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var callback_api_1 = __importDefault(require("amqplib/callback_api"));
var process = __importStar(require("process"));
var params = process.argv.slice(2);
callback_api_1.default.connect('amqp://localhost', function (err, conn) {
    conn.createChannel(function (err, ch) {
        var q = 'hello';
        var msg = JSON.stringify({
            email: params[0] ? params[0] : "",
            subject: params[1] ? params[1] : "",
            body: params[2] ? params[2] : ""
        });
        ch.assertQueue(q, { durable: false });
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () { conn.close(); process.exit(0); }, 500);
});
