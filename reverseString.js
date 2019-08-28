function reverseString(string) {
    var stringArr = string.split(' ');
    var reverseWordsArr = [];

    stringArr.forEach(word => {
        var reverseWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }
        reverseWordsArr.push(reverseWord);
    });
    return reverseWordsArr.join(' ');
}

console.log(reverseString("This is Akash karwande"));