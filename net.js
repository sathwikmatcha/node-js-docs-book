//net
//The net module provides an asynchronous network API for creating stream-based TCP or IPC servers 
//(net.createServer()) and clients (net.createConnection()).
/**
 * IPC means Inter Process Communication
 * TCP Transmission Control Protocol
 * The net module supports IPC with named pipes on Windows, and Unix domain sockets on other operating systems.
 */
const net = require("net");
const path = require("path");
//createServer
/**
 * You create a server over here
 */
var server = new net.Server();
console.log(server);
server.listen({
    port: 3000,
    host: "localhost",
})
// var net1= net.createServer().listen(path.join('\\\\?\\pipe', process.cwd(), 'myctl'));
//console.log(net1);



server.on("listening", () => {
    console.log("sun raha hai naa mei");
});
server.listen()
server.on("close", () => {
    console.log("server band hogaya");
    s
});

//address
/**
 * Returns the bound address, the address family name, and port of the server as reported 
 * by the operating system if listening on an IP socket (useful to find which port was assigned when getting an OS-assigned address)
 */

console.log(server.address());
server.getConnections(() => {
    console.log("getting connections");
});

/**
 * Doubt on solving this damn thing
 *  
var p_1 ="C:\\Users\\Sathwik Matcha\\Desktop\\Projects\\node\\projects\\test\\test.js";

var p0=path.dirname(p_1);
server.listen(p0,()=>{
    console.log("server listening");
});
*/
//close 
/**
 * closes server
 */
server.close();

//net.socket

/** 
 * This class is an abstraction of a TCP socket or a streaming IPC endpoint(uses named pipes on Windows, and Unix domain sockets otherwise).It is also an EventEmitter.
 * A net.Socket can be created by the user and used directly to interact with a server.For example, it is returned by net.createConnection(), so the user can use it to talk to the server.
 * It can also be created by Node.js and passed to the user when a connection is received.For example, it is passed to the listeners of a 'connection' event emitted on a net.Server,
 * so the user can use it to interact with the client.
*/

var socket = net.Socket();
console.log(socket);
console.log(socket.address());
console.log(socket.bufferSize);
console.log(socket.bytesRead);
var s2 = socket.connect({
    port: 3000,
    host: "localhost",
});
console.log(s2);
console.log(server);