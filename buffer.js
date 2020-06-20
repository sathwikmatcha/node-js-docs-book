//Buffer
//In Node.js, Buffer objects are used to represent binary data in the form of a sequence of bytes.

const Buffer = require("buffer").Buffer;
const B1 = require("buffer");

//alloc

var buf1 = Buffer.alloc(10, ".", "utf-8");
console.log(buf1);

//allocUnsafe

buf1 = Buffer.allocUnsafe(15);//Do not fricking use this
console.log(buf1);

//allocUnsafeSlow

buf1 = Buffer.allocUnsafeSlow(10);// Does buff.fill(0)
console.log(buf1);

//byteLength
var l1 = Buffer.byteLength("google", "utf-8");
console.log(l1);

//buffer compare

buf1 = Buffer.from('b1234');
var buf2 = Buffer.from('a123456789');
var arr = [buf1, buf2];
console.log(Buffer.compare(buf1, buf2));

//buffer from 

var ab = new ArrayBuffer(10);
var buf = Buffer.from(ab, 3);

console.log(buf.length);

//buffer entries

var buf = Buffer.from('ababab');

for (var pair of buf.entries()) {
    console.log(pair);
}

//buffer constants 
console.log(B1.constants.MAX_LENGTH);
console.log(B1.constants.MAX_STRING_LENGTH);


