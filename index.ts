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

// TYPE UNION
let hello: string | number | undefined = '100'
hello = 100
hello = undefined

// TYPE ALIAS
type StringOrNumber = string | number | undefined

let hello2: StringOrNumber = 'ciao'
hello2 = 50
hello2 = undefined

const greetings = (name: string, prefix?: string) => {
  return (prefix || 'Hello') + ' ' + name
}

console.log(greetings('Stefano', 'Ciao'))
console.log(greetings('Luigi', 'Buonasera'))

console.log(greetings('Stefano'))

// ARRAY
let myArrayOfStrings = ['Andrea', 'Massimiliano', 'Antonio']

// manualmente un tipo array si dichiara così:
let arrayOfNumbers: number[] = [10, 20, 30]
// ...oppure così:
let anotherArrayOfNumbers: Array<number> = [10, 20, 30]

let arrayOfStringsAndNumbers: (string | number)[] = ['stefano', 25]
let arrayOfStringsAndNumbers2: Array<string | number> = ['stefano', 25]
let arrayOfStringsAndNumbers3: Array<StringOrNumber> = ['stefano', 25]

arrayOfNumbers.push(1000)
arrayOfStringsAndNumbers3.push('epicode')

myArrayOfStrings.forEach((el) => {
  console.log(el.toUpperCase())
})

// console.log(arrayOfNumbers.pop()?.toString())

// il tipo Array non garantisce il numero di elementi e il loro posizionamento
let mixedArray: (string | number)[] = ['stefano', 'epicode', 50]

// TUPLE
// una TUPLA invece sì!
let tupleArray: [string, number, string] = ['ciao', 50, 'ciao2']
// ogni elemento sa il proprio tipo
tupleArray[1] = 500

// OGGETTI
let epicodeStaffMember = {
  firstName: 'Dario',
  lastName: 'Del Giudice',
  module: 'U1',
}

console.log(epicodeStaffMember.module.length)
