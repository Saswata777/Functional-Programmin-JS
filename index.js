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


