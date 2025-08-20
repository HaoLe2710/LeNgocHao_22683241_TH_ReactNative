class Rectagle{
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectagle(5, 10);
console.log(`The area is ${rectangle.getArea()} and the perimeter is ${rectangle.getPerimeter()}.`);
