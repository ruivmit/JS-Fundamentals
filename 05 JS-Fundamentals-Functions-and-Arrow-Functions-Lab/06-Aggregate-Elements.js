function aggregateElements(input) {
    let nums = input.map(Number)
    aggregate(nums, 0, (a, b) => a + b);
    aggregate(nums, 0, (a, b) => a + 1 / b);
    aggregate(nums, '', (a, b) => a + b);
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);
    }
}
aggregateElements(['1', '2', '3'])