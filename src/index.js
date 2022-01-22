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
    '     ':  ' '
};

// ============================================непрерывной строкой====================================================================================================

const decode = expr =>   expr.split('').map( (item, i, arr ) => i % 2 === 0? item = item + arr[i + 1] : item).filter( item => item.length > 1).map( item => item === '00' ? item = '' : item === '**' ? item = ' ' : item === '10' ? item = '.' : item === '11' ? item = '-' : item).map( ( item => [item])).map((item , i ,arr) => i % 5 === 0 ? item : arr[i - (i %5)].push(item)).map( item => item.length > 1? item.flat(): item ).filter( item => item.length > 1).map( item => item.reduce( (acc, cur) => acc + cur)).map( item => item = MORSE_TABLE[item]).join('');



// =========================================читабельный вариант======================================================================================
// const decode = expr =>  {
//     let code = expr.split('').map( (item, i, arr ) => i % 2 === 0? item = item + arr[i + 1] : item).filter( item => item.length > 1)
//     code = code.map( item => item === '00' ? item = '' : item === '**' ? item = ' ' : item === '10' ? item = '.' : item === '11' ? item = '-' : item)
//     code = code.map( ( item => [item])).map((item , i ,arr) => i % 5 === 0 ? item : arr[i - (i %5)].push(item)).map( item => item.length > 1? item.flat(): item ).filter( item => item.length > 1)
//     code = code.map( item => item.reduce( (acc, cur) => acc + cur))
//     code = code.map( item => item = MORSE_TABLE[item])
//     return code.join('')
// }


module.exports = {
    decode
}