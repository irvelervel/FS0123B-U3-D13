console.log('Ciao TypeScript!')

// TIPI DI DATO PRIMITIVI IN TS?
// string
// number
// boolean
// undefined e null
// any

// i : permettono di assegnare ad una variabile, funzione etc. un TIPO
let student: string = 'Giancarlo'

let age: number = 35
let canDrive: boolean = true

// student = 100/
// age = 'Ciao'

// any SPEGNE il controllo di TS sui tipi (...e a quel punto è come scrivere JS!)
let hundred: any = '100'
hundred = 100

// TYPE INFERENCE
// capacità di riconoscere il tipo di dato a prescindere dalla volontaria
// assegnazione tramite l'operatore :, grazie al suo valore iniziale

// ma TS è talmente intelligente che spesso capisce il tipo di dato grazie al
// valore iniziale che gli fornite

let epicodeTeacher = 'Stefano' // 'Stefano' è una stringa, ragion per cui
// il tipo di epicodeTeacher è stato automaticamente assegnato a "string"

console.log(epicodeTeacher.toLowerCase())

// console.log(age * epicodeTeacher) // <-- non mi fa moltiplicare una stringa con un numero

// console.log(hundred.toExponential()) <-- ?? funzionerà? :O

const sayHello = () => {
  return 'Hello!'
}

console.log(sayHello().toUpperCase())
// sayHello è stata automaticamente tipizzata come una funzione che torna una stringa,
// quindi una volta invocata la posso trattare come una stringa e otterrò dall'editor
// come suggerimenti tutti i metodi e le proprietà delle stringhe!

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(5, 7))
console.log(addition('5', '7'))

// soluzione in JS
const additionWithCheck = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'Non stai sommando due numeri!'
  }
}

console.log(additionWithCheck(5, 7))
console.log(additionWithCheck('5', '7'))

// soluzione in TS: assegnare il tipo desiderato ai parametri
const additionInTS = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionInTS(5, 7))
// console.log(additionInTS('5', 7)) // <-- errore prevenuto
