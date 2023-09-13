export class User {
    private _name: string;
    private _pid: number;
    private _email: string;
    private _type: string;
    private _checkins: string[];

    constructor(firstName: string, lastName: string, pid: number) {
        // email and type are just placeholders right now for future functionality
        this._name = firstName + ' ' + lastName;
        this._pid = pid;
        this._email = "placeholder";
        this._type = "student";
        this._checkins = [];
    }

    // Getter and setter for the 'name' property
    getName(): string {
        return this._name;
    }

    setName(newName: string) {
        this._name = newName;
    }

    // Getter and setter for the 'pid' property
    getPid(): number {
        return this._pid;
    }

    setPid(newPid: number) {
        this._pid = newPid;
    }

    // Getter and setter for the 'email' property
    getEmail(): string {
        return this._email;
    }

    setEmail(newEmail: string) {
        this._email = newEmail;
    }

    // Getter and setter for the 'type' property
    getType(): string {
        return this._type;
    }

    setType(newType: string) {
        this._type = newType;
    }

   getCheckins(): string[] {
    return this._checkins;
   }


}
