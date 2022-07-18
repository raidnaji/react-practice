

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

let hobbies: string[];

hobbies = ['sports', 'cooking']

type Person = { 
    name: string;
    age: number;
};

let person: Person;


person = {
    name: 'Raid',
    age: 100
}

// person = {
//     isEmployee: true
// }

let people: Person[];


//////////////////// Type inference

let course: string | number = 'React - the complete guide'

course = 12345

//////////////////// Functions and types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
    console.log(value);
}