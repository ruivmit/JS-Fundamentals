function upperCase([input]) {
    let str = input.toUpperCase().replace(/"/g, "")
        .match(/(\w|\s)*\w(?=")|\w+/g);
    let result = str.join(', ').replace(/'/g, "").replace("(", "").replace(")", "");
    console.log(result)
}
upperCase(['Hi, how are you?'])


//OR

function wordsUppercase([str]) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}

wordsUppercase(['Hi, how are you?'])
