import {Person} from "./bai1";

class Student extends Person{
    grade:number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    study(): string {
       return ` and now I am studying for grade ${this.grade}.`;
    }
}

const student = new Student("Hao", 21, 12);
console.log(student.study());