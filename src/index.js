const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0'
};

function decode(expr) {
    let res = '';
    let arrBinary = [];
    let sortArr = [];
    let sortArrNum = 0;
    let morseArr = [];
    let tmpMorseArr = '';

    arrBinary = expr.split('');

    let tmpLengthSortArr = 0;
    let tmpAr = '';
    for (let i = 0; i < arrBinary.length; i++) {
        if (tmpLengthSortArr < 10) {
            tmpAr = tmpAr + arrBinary[i]
            tmpLengthSortArr++;
        }
        if (tmpLengthSortArr === 10) {
            tmpLengthSortArr = 0;
            sortArr[sortArrNum] = tmpAr;
            tmpAr = '';
            sortArrNum++;
        }

    }
    for (let i = 0; i < sortArr.length; i++) {
        if (sortArr[i] === '**********') {
            continue;
        }else{
            while (sortArr[i].slice(0, 2) === '00')
                if (sortArr[i].slice(0, 2) === '00') {
                    sortArr[i] = sortArr[i].substr(2, sortArr[i].length - 1);
                }
        }
    }
    for (let i = 0; i < sortArr.length; i++) {
        while (sortArr[i] > 0) {
            if (sortArr[i].slice(0, 2) === '10') {
                tmpMorseArr = tmpMorseArr + '.'
                sortArr[i] = sortArr[i].substr(2, sortArr[i].length - 1)
            }
            if (sortArr[i].slice(0, 2) === '11') {
                tmpMorseArr = tmpMorseArr + '-'
                sortArr[i] = sortArr[i].substr(2, sortArr[i].length - 1)
            }
        }
        morseArr[i] = tmpMorseArr;
        tmpMorseArr = '';
    }
    for (let i = 0; i < morseArr.length; i++) {
        res = res + MORSE_TABLE[morseArr[i]]
    }
    let tmp = res.split('undefined').join(' ')
    return tmp
}

module.exports = {
    decode
}