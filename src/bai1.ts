export class Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, ${this.age} years old\0 as`;
    }
}

const person = new Person("Hao", 21);
console.log(person.greet());