function rounding(input) {
    let number = Number(input[0]);
    let precision = Number(input[1]);
    if(precision > 15){
        console.log((number).toFixed(15).replace(/\.?0+$/, ""))
    }
    else{
        console.log((number).toFixed(precision).replace(/\.?0+$/, ""))
    }
}


//or

function rounding(input) {
    let number = Number(input[0]);
    let precision = Number(input[1]);

    precision > 15 ? console.log((number).toFixed(15).replace(/\.?0+$/, "")) :
        console.log((number).toFixed(precision).replace(/\.?0+$/, ""))
}
