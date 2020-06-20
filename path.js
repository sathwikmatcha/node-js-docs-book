const path = require("path");
var p0 = "C:\\Users\\Sathwik Matcha\\Desktop\\IITB\\Doc1.pdf";

var p= path.win32.basename(p0);//win path structure
console.log(p);
//basename
p=path.basename(p0);
console.log(p);
//dirname
p=path.dirname(p0);
console.log(p);
//extension name
p=path.extname(p0);
console.log(p);
//formatting path
p=path.format(
    {
        dir: 'C:\\Users\\Sathwik Matcha\\Desktop\\IITB',
        base: 'shittext.txt'
    }
)
console.log(p);
//absolute path.
p=path.isAbsolute(p0)
console.log(p);
//join paths
p=path.join("C:","Users")
console.log(p);
//noramalize path
p = path.normalize('C:\\temp\\\\foo\\bar\\..\\')
console.log(p);
//parse path
p=path.parse(p0);
console.log(p);
