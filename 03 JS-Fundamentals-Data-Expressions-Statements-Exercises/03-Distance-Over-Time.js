function distance(input) {
    let V1 = Number(input[0]);
    let V2 = Number(input[1]);
    let T = Number(input[2]);
    let S1distance = (V1 * 1000 / 3600) * T;
    let S2distance = (V2 * 1000 / 3600) * T;
    let distanceBetweenObj = Math.abs(S1distance - S2distance)
    console.log(distanceBetweenObj);
}
distance([5, -5, 40])