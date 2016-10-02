function biggestOfThreeNums(input) {
    let firstNum = input[0];
    let secondNum = input[1];
    let thrirdNum = input[2];
    let maxNum = Math.max(firstNum, secondNum, thrirdNum)
    console.log(maxNum)
}
biggestOfThreeNums(['-1', '-2', '0'])