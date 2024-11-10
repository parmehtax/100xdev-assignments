let counter = 0;

function counting (){
    console.log(counter);
    counter++;
    setTimeout(counting,1000);
}

setTimeout(counting,1000);