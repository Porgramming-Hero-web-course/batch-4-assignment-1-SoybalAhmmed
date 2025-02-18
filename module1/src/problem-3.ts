const countWordOccurrences  = (sentence: string, word: string): number => {
    const convertWords = sentence.toLowerCase().split(' ')
    console.log(convertWords)
    return convertWords.filter(convertword => convertword === word.toLowerCase()).length;
}
const words = countWordOccurrences("I love typescript typescript I", "typescript")
console.log(words)