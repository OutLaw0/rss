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

let decode1 = [];
let a1 = '';


let b = '';

const newA = expr.split('**********');

for (let a of newA){ //got the word
    let word = ''; //DONT FORGET CLEAR VAR!!!!

for (let i = 0; i < a.length; i+=10){ //check the letter of word
   
  let letter = ''; //DONT FORGET CLEAR VAR!!!!
  a1 = a.slice(i, i+10);

  for (let j = 0; j < a1.length; j+=2){ //split the letter for . and -
   
    
    b =  a1.slice(j, j+2);
    if (b === "10")  {letter += '.' }
    if (b === "11") {letter += '-' }//decode 
}

word += MORSE_TABLE[letter];

}
decode1.push(word); 

}
return decode1.join(' ')

}


module.exports = {
    decode
}
