function composeTag(input) {
    let fileLocation = input[0];
    let alternateText = input[1];
    console.log("<img src="+ '\"' + fileLocation + '\"' + " " + 'alt=' +'\"' + alternateText + '\">')
}
composeTag(['smiley.gif', 'Smiley Face'])


//<img src="smiley.gif" alt="Smiley Face">