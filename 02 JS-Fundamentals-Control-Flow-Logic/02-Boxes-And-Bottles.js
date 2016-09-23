function bottlesInBoxes(input) {
    let bottles = Number(input[0]);
    let boxCap = Number(input[1]);
    let boxes = Math.ceil(bottles / boxCap);
    return boxes;
}
