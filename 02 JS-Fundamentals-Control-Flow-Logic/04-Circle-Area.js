function circleArea(radius) {
    let area = Math.PI * (radius * radius);
    console.log(area);
    console.log((area).toFixed(2));
}

//OR

function circleArea(r) {
    let area = Math.PI * r * r;
    console.log(area);
    let areaRounded = Math.round(area * 100) / 100;
    console.log(areaRounded);
}
