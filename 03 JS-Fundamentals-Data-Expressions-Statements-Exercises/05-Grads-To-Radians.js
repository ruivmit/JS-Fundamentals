function solve(input) {
    let grads = Number(input[0]);
    let degrees = grads * 0.9;
    degrees = degrees % 360;

    if(degrees < 0){
        degrees += 360;
    }
  console.log(degrees)
}
//solve([-50])

// or

function solve (input) {
    let grads = Number(input[0])
    let degrees = 0.9 * grads

    degrees <= 0 ? degrees = 360 + (degrees % 360) : degrees >= 360 ? degrees = degrees % 360 : degrees
    console.log(degrees)
}


// or

function solve([input]) {
    let degree = Number(input) * 0.9 % 360;

    if (degree < 0){
        degree += 360;
    }
    console.log(degree);
}
