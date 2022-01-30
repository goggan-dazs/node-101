const fs = require("fs");

let file = process.argv[2];

fs.readFile(file, function callback(err, data) {
    if (err){
        console.log(err);
    } else {
      let dataString = data.toString();
      let splitData = dataString.split("\n")
      console.log(splitData.length - 1);
      return data;
        // const lines = data.toString().split('\n').length - 1;
        // console.log(lines)
    }
});



//fs.readFile(file, callback(err, file));