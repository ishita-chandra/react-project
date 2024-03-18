{
    let age: number =20;
//age="twenty"
console.log(age)

let coder: string="matt"
const incrementAge = (age: number):number => {
    return age+1;
}

const printAge = (age:number): void =>{
    console.log(age)
}
printAge(age);
age = incrementAge(age)
printAge(age);

let roomname: number|string;
roomname=801;
roomname="Tower B 801"

let dhoniage:number |null;
dhoniage=42;
incrementAge(dhoniage);
dhoniage=null

if(dhoniage!==null)
    incrementAge(dhoniage)
else{
    incrementAge(1)
}
incrementAge(dhoniage ?? 42)
incrementAge(dhoniage!)

const incrementAge2=(age:number|null): number=>{
    return age!+1 ?? 21;
}
const incrementAge3=(age?:number): number=>{
    return age ?? 21;
}

const incrementAge4=(age:number=21): number=>{
    return age;
}


class Person{

    name:string;
    age?: number;
    active: boolean=false;

    constructor(name:string,age?:number){
        this.name=name;
        this.age=age;

    }
    
celebratebday():void{
    this.name="Ranbir"
    if(this.age!==undefined) 
        this.age++
}
}

const person1 = new Person('ishita',22);
const person2 = new Person('aayushi',23);
console.log(person1,person2)
person1.celebratebday()
console.log(person1)





class Person2{

    active: boolean=false;
    private _changed: boolean=false
    constructor(public name:string, public age?:number){

    }

    public get changed ():boolean{
        return this._changed;
    }
    public set changed(value: boolean){
        this._changed=value
    }
}
const person3= new Person2("ranbir",45)
person3.changed= true;
console.log(person3.changed)


class Child extends Person2{

    toys: string[];

    constructor(name: string, toys:string[],age?: number){
        super(name,age);
        this.toys=toys
    }
}

let child1=new Child('ishita',["car","star parents"]  ,5);
console.log(child1)


//interfaces
interface Account{
    id: number;
    balance: number;
    transactions: number[];
    addBalance(amt:number):void;
}

class CheckingAccount implements Account{
    constructor(public id:number, public balance:number, public transactions:number[]){}

        public addBalance(amt: number): void {
            this.balance+=amt
        }

}

let account : Account={id:34,balance:8000,transactions:[100,200],addBalance(amt:number){this.balance+=amt}};
console.log(account)
account.addBalance(400)
console.log(account)

type Transaction = {
    date: Date;
    amount: number;
    desc: string;
}

const transaction1:Transaction={date: new Date(),amount:1000, desc: "desposit"}

class EnhancedTransaction implements Transaction{
    constructor(public date: Date, public amount: number, public desc:string){}
}

//combining types

let x: number|string;

type Teacher= {name:string, role:string}
type Employee={id:number, salary: number}

type SchoolEmployee = Teacher & Employee;
let s1:SchoolEmployee = {name:"abc", role:"teacher",id:1,salary:2000}

//warning

type type1= string|number|boolean
type type2=Teacher|number|boolean

type type3= type1&type2
let t1:type3= 23;
let t2:type3=true;
// let t3:type3= "abc";
























}