function multiplicationTable(input) {
    let num = Number(input[0]);
    let html = `<table border="1">\n`;
    for (let i = 0; i <= num; i++) {
        let countNum = i;
        html += `    <tr>`;
        for (let j = 0; j <= num; j++) {
            if (i == 0) {
                if (j == 0) html += `<th>x</th>`;
                else html += `<th>${j}</th>`;
            }
            else {
                if(j == 0)html += `<th>${i}</th>`;
                else {
                    html += `<td>${countNum}</td>`;
                    countNum += i;
                }
            }
        }
        html += `</tr>\n`;
    }
    html += `</table>`;
    return html
}


//or


function multiplicationTable(input) {
    let size = Number(input[0]);
    let table = "<table border='1'>\n";
    table += "<tr>\n" + "<th>" + "x" + "</th>\n";
    for (let i = 1; i <= size; i++) {
        table += "<th>" + `${i}` + "</th>\n";
    }
    table+="</tr>\n";
    for (let row = 1; row <= size; row++) {
        table += "<tr>";

        for (let col = 1; col <= size; col++) {
            if(col==1) {
                table += "<th>" + `${col * row}` + "</th>\n";
            }
            table += "<td>" + `${col * row}` + "</td>\n";
        }
        table+="<tr>";
    }

    table += "</table>";

    return table;
}
console.log(multiplicationTable(['3']));
