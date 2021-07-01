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
  let morze = ''
  for (i in lettered) {
    let dividedLetter = lettered[i].match(/.{1,2}/g)
    let converted = []
    for (j in dividedLetter) {
      if (dividedLetter[j] == '10') {
        converted.push('.')
      } else if (dividedLetter[j] == '11') {
        converted.push('-')
      }
    }
    let joined = converted.join('').split(' ')
    for (k in joined) {
      
      if (joined[k] == '') {
        morze+=' '
      }
      for (l in MORSE_TABLE) {
        if (l == joined[k]) {
          morze+=MORSE_TABLE[l]
        }
      }
    }
  }
  return morze
}

module.exports = {
  decode
}
