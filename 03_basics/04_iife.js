(function iife(){
    console.log(`DB CONNECTED`);
})();

// (() => {
//     console.log(`DB CONNECTED PART 2`);
// })()

((name) => {
    console.log(`DB CONNECTED PART 2 ${name}`);
})('Raghav')