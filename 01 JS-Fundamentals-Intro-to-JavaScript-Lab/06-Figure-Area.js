function figureArea([w, h, W, H]) {
    let area1 = H * W;
    let area2 = h * w;
    let areaCommon = (Math.min(w, W)) * (Math.min(h, H));
    let result = area1 + area2 - areaCommon;
    console.log(result)
    return result;
}



