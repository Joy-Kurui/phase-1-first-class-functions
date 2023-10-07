
function receivesAFunction(cb){
    console.log(cb());
}
receivesAFunction(cb => {console.log(`Yes Callbacks!`)});


function returnsANamedFunction(){
    return function namedFunc(){return `Saturday!`}; 
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`Yes Callbacks!`);
      };
}