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
epicodeStaffMember.firstName = 'Dario'

// INTERFACES
// un'interfaccia è una struttura dati che definisce le proprietà di un oggetto

interface EpicodeTeacher {
  firstName: string // obbligatoria
  lastName: string // obbligatoria
  module?: string | string[] // facoltativa, una "proprietà opzionale"
}

let epicodeTeacher1: EpicodeTeacher = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  // module: 'U3',
}

let epicodeTeacher2: EpicodeTeacher = {
  firstName: 'Lidia',
  lastName: 'Kovac',
  module: ['U2', 'U3'],
}

let arrayOfTeachers: Array<EpicodeTeacher> = []
arrayOfTeachers.push(epicodeTeacher1)
arrayOfTeachers.push(epicodeTeacher2)
// arrayOfTeachers.push(100) // <-- non funziona, non è un oggetto EpicodeTeacher

arrayOfTeachers.forEach((teacher) => {
  console.log(teacher.lastName)
})

interface HumanBeing {
  numberOfHands: number
  height: number
  hairColor: string
  moustaches: boolean
}

let marioBros: HumanBeing = {
  numberOfHands: 2,
  height: 160,
  hairColor: 'Brown',
  moustaches: true,
}

interface SoccerPlayer extends HumanBeing {
  team: string
  favouriteFoot: string
}

let player: SoccerPlayer = {
  numberOfHands: 2,
  height: 175,
  hairColor: 'blonde',
  moustaches: false,
  team: 'Milan',
  favouriteFoot: 'left',
}

// GENERICS
// Un GENERIC è un TIPO passato come un ARGOMENTO ad un'interfaccia
// nella definizione di interfaccia lo si definisce e lo si assegna come tipo
// della proprietà designate (perchè non volete che una proprietà abbia sempre
// lo stesso tipo per ogni utilizzo), e all'utilizzo dell'interfaccia va passato
// attraverso <>

interface GenericAddress<A> {
  street: string
  civicNumber: number
  zipCode: string
  city: string
  area: A
}

let italianAddress: GenericAddress<string> = {
  street: 'Via del Campanile',
  civicNumber: 24,
  zipCode: '00321',
  city: 'Cagliari',
  area: 'Sardinia',
}

interface AmericanArea {
  region: string
  state: string
}

let americanAddress: GenericAddress<AmericanArea> = {
  street: '5th Avenue',
  civicNumber: 345,
  zipCode: 'sdkfj',
  city: 'Seattle',
  area: {
    region: 'SW',
    state: 'NY',
  },
}
