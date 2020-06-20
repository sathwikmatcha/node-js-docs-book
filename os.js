const os = require("os");

//EOL 
//end of line-->new line
console.log(os.EOL);//End of line

//arch
//returns CPU Architecture
console.log(os.arch())

//constants
console.log(os.constants);

//cpus
console.log(os.cpus());
//hostname
console.log(os.hostname());
//network Interfaces
console.log(os.networkInterfaces());
//platform
console.log(os.platform());