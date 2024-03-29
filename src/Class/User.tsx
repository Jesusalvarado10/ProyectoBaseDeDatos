export default class user  {
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    getUserName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    setName(name: string) {
        this.name = name;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setPassword(password: string) {
        this.password = password;
    }
    
}