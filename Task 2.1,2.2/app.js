const name = 'Elena'
const age = '24'
const city = 'Minsk'
const hobby = 'Люблю саморазвитие, психологию и рост. В свободное время занимаюсь теннисом, йогой, люблю читать автобиографичные книги (одна их последних которая вдохновила – биография Стива Джобса).'
console.log(name, age, city, hobby)

const Man = {
    name: 'Lena',
    surname: 'Levkovich',
    age: 24,

    getInfo(destination) {
        let resultString = `Hello. My name is ${this.name} ${this.surname}. My age is ${this.age}.`;

        if (destination) {
            resultString = `Hello. My name is ${this.name} ${this.surname}. My age is ${this.age}. Today I am going to ${destination}`
        }

        return resultString;
    }
}

function getInfo(destination) {
    let resultString = `Hello. My name is ${Man.name} ${Man.surname}. My age is ${Man.age}.`;

        if (destination) {
            resultString = `Hello. My name is ${Man.name} ${Man.surname}. My age is ${Man.age}. Today I am going to ${destination}`
        }

        return resultString;
}

console.log(getInfo('zhopa'))

console.log(Man.getInfo('market'))