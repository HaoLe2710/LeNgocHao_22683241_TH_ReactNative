class Product{
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}

const product1 = new Product("Laptop", 1500);
const product2 = new Product("Smartphone", 800);
const product3 = new Product("Tablet", 300);
const product4 = new Product("Monitor", 50);
const product5 = new Product("Speaker", 70);
const product6 = new Product("Microphone", 10);

const products = [product1, product2, product3, product4, product5, product6];
const filteredProducts = products.filter(product => product.getPrice() > 100);
console.log(filteredProducts.map(product => product.getName()));