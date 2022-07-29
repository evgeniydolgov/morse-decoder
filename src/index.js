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
    let word_morse = {};

    for (key in MORSE_TABLE){
        word_morse[MORSE_TABLE[key]] = key;
    };
    word_morse[' '] = ' ';
    let answer = [];
    let x = expr.split('');
    console.log(x);
    x.forEach(item => {
        answer.push(word_morse[item])
    })
    console.log(answer);
    let ibra = [];
    answer.forEach(item => {
        for (let i = 0; i < item.length; i++){
            item[i] === '.'? ibra.push('10') : item[i] === '-'? ibra.push('11') : ibra.push('**********');
        }
        ibra.push('!')
    });

    let z = ibra.join('').split('!');
    z.forEach(item => {
        if(item === ''){
        z.pop()
        }
    });
    console.log(z)
    let y = [];
    z.forEach(item => {
        let b = ('0000000000' + item)
        y.push(b.substr(b.length -10));
        
    });
    return z.join('')
}

module.exports = {
    decode
}