// Array

const programmer = ['Bill'];
programmer.push('Mark');
programmer.push('Elon');

console.log(programmer);

programmer.splice(1, 1,'Alan');

console.log(programmer);

programmer.shift();

console.log(programmer);

const myCompanies = ['FPT', 'VNG'];
const theirCompanies = ['vingroup', 'VNPT'];
const techCompanies = myCompanies.concat(theirCompanies);

console.log(techCompanies)


// Object

const my = {};
my.fullname = 'Dinh Nhat Nam';
my.company = 'Thakral Corp';
my.age = 27;
my.city = 'HCMC';

console.log(my)

function isanAdult(person){
    if(person.age > 17){
        console.log('is an Adult')
    }
    else{
        console.log('is not an Adult')
    }
}

isanAdult(my)

function isCoderSChoolStaff(person){
    if(person.company === 'CoderSchool'){
        console.log('is working at CoderSchool')
    }
    else{
        console.log('is not working at CoderSchool')
    }
}

isCoderSChoolStaff(my)


// Exercise

const charles = {}
charles.company = 'CoderSchool'

isCoderSChoolStaff(charles)


const anonymous = {}
anonymous.fullname = 'Clark Kent'
anonymous.firstname = 'Clark'
anonymous.lastname = 'Kent'
anonymous.company = 'Daily Planet'
anonymous.age = 40
anonymous.city = 'Metropolis'

function describePerson(person){
    console.log(person.fullname, person.age, person.company)
}
describePerson(anonymous)

function logLastname(person){
    console.log(person.lastname)
}
logLastname(anonymous)

function getInitials(person){
    console.log(person.firstname[0])
}
getInitials(anonymous)

function ageOneYear(person){
    console.log(person.age + 1)
}
ageOneYear(anonymous)

const today = new Date
const year = today.getFullYear()

function getBirthYear(person){
    console.log(year - person.age)
}
getBirthYear(anonymous)


// Loop

const number = [1, 2, 3, 4, 5]
for (let i=0; i<number.length; i++){
    console.log(number[i])
}


// Truthy/Fasly\

const one = 1
if (one < 10){
    console.log('is truthy')
}

const zero = 0
if (zero * 10 ===0){
    console.log('is truthy')
}

else{
    console.log('is falsy')
}