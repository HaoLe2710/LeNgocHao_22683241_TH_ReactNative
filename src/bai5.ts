class BankAccount{
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(1000);
console.log(`Initial balance: ${myAccount.getBalance()}`);
myAccount.deposit(500);
console.log(`After deposit: ${myAccount.getBalance()}`);
myAccount.withdraw(200);
console.log(`After withdrawal: ${myAccount.getBalance()}`);