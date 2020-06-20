//http

/**
 * The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 
 * In particular, large, possibly chunk-encoded, messages. 
 * The interface is careful to never buffer entire requests or responses, so the user is able to stream data.
 */


const http = require("http");//calling http lib
const url =require("url");//calling url lib
const { options } = require("yargs");

const link ="https://www.google.com";//setting link for usage

//http.agent
/**
 * An Agent is responsible for managing connection persistence and reuse for HTTP clients. 
 * It maintains a queue of pending requests for a given host and port, reusing a single socket connection for each until the queue is empty, at which time the socket is either destroyed or 
 * put into a pool where it is kept to be used again for requests to the same host and port. 
 * Whether it is destroyed or pooled depends on the keepAlive option.
 * 
 * 
 */
var my_agent=new http.Agent({
    keepAlive: true,
});
console.log(my_agent);


