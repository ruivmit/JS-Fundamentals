function triangle(input) {
    let sym = Number(input[0])

    for(let row = 1; row <= sym; row ++ ){
        console.log('*'.repeat(row))
    }
    for(let row = sym - 1; row >= 1; row -- ){
        console.log('*'.repeat(row))
    }

}
triangle([14])