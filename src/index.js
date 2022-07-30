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

function decode(expr) {
    let arrOfNumber = expr.split(/(.{10})/).filter(function(f){return f !== ''});
    let answerMorse = [];
    arrOfNumber.forEach(item => {
        let x = '';
        for(let i=0; i<item.length; i += 2) {
            let value = item[i] + item[i+1];
            if (value === '00'){
                continue
            } else if (value === '**'){
                i +=10;
                x += ' ';
            } else if (value === '10'){
                x += '.';
            }else {
                x += '-';
            }
            
        }
        answerMorse.push(x);
    });
    let answerWord =[];
    answerMorse.forEach(item => {
        item === ' ' ? answerWord.push(' ') : answerWord.push(MORSE_TABLE[item]);
    });
    return answerWord.join('');
}

module.exports = {
    decode
}