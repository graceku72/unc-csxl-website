export class User {
    private _name: string;
    private _pid: number;
    private _email: string;
    private _type: string;

    constructor(firstName: string, lastName: string, pid: number) {
        // email and type are just placeholders right now for future functionality
        this._name = firstName + ' ' + lastName;
        this._pid = pid;
        this._email = "placeholder";
        this._type = "student";
    }

    // Getter and setter for the 'name' property
    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    // Getter and setter for the 'pid' property
    get pid(): number {
        return this._pid;
    }

    set pid(newPid: number) {
        this._pid = newPid;
    }

    // Getter and setter for the 'email' property
    get email(): string {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }

    // Getter and setter for the 'type' property
    get type(): string {
        return this._type;
    }

    set type(newType: string) {
        this._type = newType;
    }

    // Add more functionality here
    greet(): string {
        return `Hello, my name is ${this._name}.`;
    }
}
