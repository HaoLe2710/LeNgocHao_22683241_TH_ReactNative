class Car{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo(): string {
        return `Car Info: ${this.year} ${this.brand} ${this.model}`;
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.displayInfo());