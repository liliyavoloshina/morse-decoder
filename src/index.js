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
}

function decode(expr) {
  let lettered = expr.match(/.{1,10}/g)
  for (i in lettered) {
    let dividedLetter = lettered[i].match(/.{1,2}/g)
    
    let converted = []
    for (s in dividedLetter) {
      if (dividedLetter[s] == '10') {
        converted.push('.')
      } else if (dividedLetter[s] == '11') {
        converted.push('-')
      }
    }
    let decoded = converted.join('')
    console.log(decoded)
  }
}

module.exports = {
  decode
}
