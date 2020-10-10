const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const numbersMap = {
    10: '.',
    11: '-',
};

const SPACE = '**********';

function decode(expr) {
    // write your solution here
    const words = expr.split(SPACE);

    const decodedArr = words.map((word) => {
        const letterArr = splitForCount(word, 10);
        const result = letterArr.reduce((acc, letter) => {
            const morseLetter = decodeInMorse(letter);
            return `${acc}${MORSE_TABLE[morseLetter]}`;
        }, '');
        return result;
    });

    return decodedArr.join(' ');
}

const splitForCount = (word, count) => {
    const arr = [];
    const letterLength = count;
    for (let i = 0; i <= word.length - letterLength; i += letterLength) {
        arr.push(word.slice(i, i + letterLength));
    }
    return arr;
};


const removeZeros = (letter) => {
    const arr = letter.split('');
    const index = arr.indexOf('1');
    return index > 0 ? arr.slice(index).join('') : arr.join('');
};

const decodeInMorse = (letter) => {
    const clearLetter = removeZeros(letter);
    const letterArr = splitForCount(clearLetter, 2);
    return letterArr.reduce((acc, item) => `${acc}${numbersMap[item]}`, '');
};

module.exports = {
    decode
}