const fs = require('fs');

function cleanfile(file){
    return new Promise(function(resolve){
        fs.readFile(file,'utf-8',function(err,data){
            if(err){throw err}
            data = data.split(' ').join('');
            fs.writeFile(file,data,()=>
            {
                resolve();
            })
        })
    })
}



async function main(){
    await cleanfile('a.txt');
    console.log("File is cleaned");
}

setTimeout(()=>{console.log("Hellooo")},1000)

main()