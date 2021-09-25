//Função de primeira classe e ordem maior

function getName(){
    return 'Carlos Alberto Rodrigues';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);