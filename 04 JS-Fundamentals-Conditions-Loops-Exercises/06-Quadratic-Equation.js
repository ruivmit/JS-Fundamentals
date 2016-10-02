function quadraticEquation(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let discriminant = (Math.pow(b, 2)) - (4 * a * c);

    if (discriminant < 0) {
        console.log("No");
    }
    else if (discriminant > 0) {
        let x2 = (-(b) + Math.sqrt(discriminant)) / (2 * a);
        let x1 = (-(b) - Math.sqrt(discriminant)) / (2 * a);
        console.log(x1);
        console.log(x2);
    }
    else {
        let x = (-(b) / (2 * a));
        console.log(x);
    }
}
quadraticEquation([1, -12, 36])