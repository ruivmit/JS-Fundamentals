function lastMonth(input) {
    let dd = input[0];
    let mm = input[1];
    let yyyy= input[2];

    let lastDayLastMonth = new Date(yyyy, mm - 1, dd);
    lastDayLastMonth.setDate(0);

    let date = new Date(lastDayLastMonth);
    let day = date.getDate(); //Date of the month: 2 in our example
    let month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
    let year = date.getFullYear() //Year: 2013

    console.log(day);
}

