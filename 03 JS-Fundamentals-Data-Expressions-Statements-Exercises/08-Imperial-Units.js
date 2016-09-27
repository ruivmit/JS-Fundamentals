function solve (input) {
    let inches = Number(input[0])
    let feet = inches / 12
    let remainder = inches % 12

    if(inches < 0){
        console.log(((Math.ceil(feet)).toFixed(0)+'\'' + (Math.ceil(remainder)).toFixed(0) + '\"'))
    }
    else{
        console.log((Math.floor((feet)).toFixed(0)+'\''+ '\-' + (Math.floor(remainder)).toFixed(0) + '\"'))
    }

}
solve([0])
