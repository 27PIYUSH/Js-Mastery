export default class person{
    constructor(fname , lname ,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}
 
// ek file m ek hi export default hoga

export class Person2{
    constructor(fname , lname ,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}

export class Person3{
    constructor(fname , lname ,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    info(){
        console.log(this.fname,this.lname,this.age);
    }
}