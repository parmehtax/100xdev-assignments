const fs = require('fs');

fs.readFile('a.txt','utf-8',function(err,data)
{
    console.log(data);
});

let sum=0;
for (let i=0;i<100;i++)
{
    sum+=i;
}

console.log(sum);