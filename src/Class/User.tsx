export default class user  {
    id:string;
    id2: any;
    email: string;
    password: string;
    constructor( email: string, password: string) {
        this.id="";
        this.id2=null;
        this.email = email;
        this.password = password;
    }
    getid2() {
        return this.id2;
    }
    setid2(id2: any) {
        this.id2 = id2;
    }
    getId() {
        return this.id;
    }
    setId(id: string) {
        this.id = id;
    }

    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
  
    
    setEmail(email: string) {
        this.email = email;
    }
    setPassword(password: string) {
        this.password = password;
    }
    
}