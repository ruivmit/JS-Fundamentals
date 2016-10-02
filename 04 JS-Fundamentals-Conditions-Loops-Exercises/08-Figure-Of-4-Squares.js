function figureOfFourSquares(input) {
    let num = Number(input[0]);
    let firstLine = ('+' + ('-'.repeat(num - 2)) + '+' + ('-'.repeat(num - 2)) + '+');
    let secondLine = ('|') + (' '.repeat(num - 2)) + ('|') + (' '.repeat(num - 2)) + ('|');
    //noinspection JSAnnotator
    if(num < 2 || num > 200) {
        console.log('');
    } else if (num >= 2 && num <= 4 && num % 2 == 0) {
        for (let row = 1; row <= num - 1; row++) {
            console.log(firstLine);
        }
    } else if(num >= 2 && num <= 4 && num % 2 != 0) {
        for (let row = 1; row <= num; row++) {
            console.log(firstLine);
        }
    } else if (num > 4 && num <200 && num % 2 == 0) {
        console.log(firstLine)
        for(let row = 1; row <= ((num - 3) / 2); row++){
            console.log(secondLine)
        }
        console.log(firstLine)
        for(let row = 1; row <= ((num - 3) / 2); row++){
            console.log(secondLine)
        }
        console.log(firstLine)
    } else if(num > 4 && num <200 && num % 2 != 0){
        console.log(firstLine)
        for(let row = 1; row <= ((num - 3) / 2); row++){
            console.log(secondLine)
        }
        console.log(firstLine)
        for(let row = 1; row <= ((num - 3) / 2); row++){
            console.log(secondLine)
        }
        console.log(firstLine)
    }
}
figureOfFourSquares(['201'])
