function harmLessNote(note, text) {
    var noteArr = note.split(' ');
    var textArr = text.split(' ');
    var textObj = {};

    textArr.forEach(word => {
        if (!textObj[word]) {
            textObj[word] = 0;
        }
        textObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (textObj[word]) {
            textObj[word]--;
            if (textObj[word] < 0) noteIsPossible = false;
        } else {
            noteIsPossible = false;
        }
    });
    return noteIsPossible;
}
console.log(harmLessNote('ok be', 'Hey , it is ok to be ok'));