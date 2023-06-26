// Introduction 

function x(){
    console.log("X is call back function");
}

function Y(x)
{
    x();
    console.log("Y is higher order function");
}

Y(x);