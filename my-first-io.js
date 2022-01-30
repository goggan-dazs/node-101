const fs = require('fs');

let file = process.argv[2];

let buffer = fs.readFileSync(file);

let bufferString = buffer.toString()

let fullItem = bufferString.split('\n');

console.log(fullItem - 1);