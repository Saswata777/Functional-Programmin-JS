// Example 2

const radius =[3, 4 ,5,6];


// Area function 
const CalculateArea = function (radius){
    const area=[];
    
    for(let i=0; i<radius.length; i++){
            area.push(Math.PI * radius[i]*radius[i]);
    }
    return area;
}

console.log(CalculateArea(radius));



// Circumfarence function 
const CalculateCircumfarence = function (radius){
    const Circumfarence=[];
    
    for(let i=0; i<radius.length; i++){
            Circumfarence.push(2*Math.PI * radius[i]);
    }
    return Circumfarence;
}

console.log(CalculateCircumfarence(radius));



// Diameter function
const Calculatediameter = function (radius){
    const diameter=[];
    
    for(let i=0; i<radius.length; i++){
            diameter.push(2*radius[i]);
    }
    return diameter;
}

console.log(Calculatediameter(radius));



// optimised code


// area function
const area = function(radius){
        return Math.PI*radius * radius;
}

// Circumfarence function
const Circumfarence =  function (radius){
        return 2 * Math.PI*radius;
}



// Diameter function
const Diameter =  function (radius){
    return 2 *radius;
}



// function for cal culating any thing
const Calculate = function (radius, logic){
    const ans=[];
    
    for(let i=0; i<radius.length; i++){
            ans.push(logic(radius[i]));
    }
    return ans;
}

// Here we are reusing Calculate function and passing deferrent logics  
console.log("Optimised code result");
console.log(Calculate(radius, area));
console.log(Calculate(radius, Circumfarence));
console.log(Calculate(radius, Diameter));


// Map function
// Map function is also a common higher order function 
// Map function does similar kind thing that is happening inside Calculate function 


// const Calculate = function (radius, logic){           
//     const ans=[];
    
//     for(let i=0; i<radius.length; i++){
//             ans.push(logic(radius[i]));
//     }
//     return ans;
// }


// insted using whole calculatre function we can just use raduis.map(logic) 

console.log("Using map function");
console.log(radius.map(area));
console.log(radius.map(Circumfarence));
console.log(radius.map(Diameter));




// Now we are trying to make 'Calculate function' exactly similar to the map function

Array.prototype.Calculate = function (radius, logic){
    const ans=[];
    
    for(let i=0; i<radius.length; i++){
            ans.push(logic(radius[i]));
    }
    return ans;
}


console.log("Using Array.prototype");
console.log(radius.Calculate(radius, area));
console.log(radius.Calculate(radius, Circumfarence));
console.log(radius.Calculate(radius, Diameter));


// now we are use 'this' key word insted of radius inside calculate function 




Array.prototype.Calculate = function (logic){ //This is pollyfill for map function
    const ans=[];
    
    for(let i=0; i<this.length; i++){
            ans.push(logic(this[i]));
    }
    return ans;
}


console.log("Using Array.prototype along with this key word");
console.log(radius.Calculate(area)); //This is pollyfill for map function
console.log(radius.Calculate(Circumfarence)); // same
console.log(radius.Calculate(Diameter));  // same




