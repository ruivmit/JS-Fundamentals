function oddOrEven(num) {
    let remNum = num % 2;
    if(remNum == 0) console.log("even");
    else if (remNum == Math.round(remNum)) console.log("odd");
    else console.log("invalid")
}


