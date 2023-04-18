function solve(words, sentence) {
    let arrWords = [...words.split(', ')];
    let arrSentence = [...sentence.split(' ')];
    for (let i = 0; i < arrSentence.length; i++) {
        for (let j = 0; j < arrWords.length; j++) {
            let wordSentence = arrSentence[i];
            let wordWords = arrWords[j];
            if(wordSentence.includes('*') && wordSentence.length === wordWords.length) {
                sentence = sentence.replace(wordSentence, wordWords);
            }
        }
    }
    console.log(sentence);
}