function cone(input) {
    let radius = Number(input[0]);
    let height = Number(input[1]);
    let volume = (1/3)*Math.PI*radius*radius*height;
    let baseSurfaceArea = Math.PI*radius*(radius+(Math.sqrt((radius*radius)+(height*height))));
    console.log((volume).toFixed(4));
    console.log((baseSurfaceArea).toFixed(4));
}

