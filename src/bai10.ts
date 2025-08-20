class Account{
    public name:string;
    private password:string;
    readonly createdAt: Date;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
        this.createdAt = new Date();
    }
}