//date function return milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
//this eample takes 2 secods to run
const start = http://Date.now();

console.log('starting timer...');
//expected output: starting timer...

setTimeout(() => {
    const millis =http://Date.now() - start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
// expected output: secods elapsed = 2
},2000);