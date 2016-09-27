function compoundInterestCalc(input) {
    let principalSum = Number(input[0]);
    let interestRate = Number(input[1]);
    let compoundPeriod = Number(input[2]);
    let totalTimespan = Number(input[3]);

    let nomIntRate = interestRate / 100;
    let compoundFreq = 12 / compoundPeriod;
    let compoundInterest = (Math.pow((1 + (nomIntRate / compoundFreq)), (compoundFreq * totalTimespan)));
    let total = principalSum * compoundInterest;

    console.log((total).toFixed(2))
}
compoundInterestCalc([100000, 5, 12, 25])