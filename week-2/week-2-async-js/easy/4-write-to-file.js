const fs = require('fs');

fs.writeFile('b.txt','Helloooo',function(err){
    if (err){
        throw err;
    }
    console.log("File Written");
})