//function triangle(input) {
 //   let row = Number(input[0]);
 //   let line = '';
 //       for (let col = 1; col <= row; col++) {
  //          line += '$'
  //          console.log(line)
  //      }
//}
//triangle(['2'])



//function triangle(input) {
 //   let col = Number(input[0]);
 //   for (let row = 1 ; row <= col; row++) {
 //   console.log(new Array(row + 1).join('$'))
 //   }
//}
//triangle(['7'])



function triangle(input) {
    let col = Number(input[0]);
    for (let row = 1 ; row <= col; row++) {
        console.log('$'.repeat(row))
    }
}
triangle(['2'])