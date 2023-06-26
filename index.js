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

