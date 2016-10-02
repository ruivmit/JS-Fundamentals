function squareOfStars(input) {
    let num = Number(input[0]);

    if((num == 5) || (num == "")){
        for(let row = 1; row <= 5; row ++){
            console.log(('*'+ " ").repeat(5))
        }
    }
    else{
        for(let row = 1; row <= num; row ++){
            console.log(('*' + " ").repeat(num))
        }
    }
}
squareOfStars([6])