/*
Come up with with a parent class
Extend that parent class into two children
Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
 */


/* -------------------------------------------------------------------------- */
/*         underscore simply a DEV convention  thats says DO NOT TOUCH        */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                         only access it with getter   get                        */
/* -------------------------------------------------------------------------- */
class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
    sayBye() {
        console.log(`Its been a pleasure working with you!`)
    }
}
class Front extends Contractor {
    constructor(name, role, technology) {
        super(name, role) //super prevent repeat role and name (inherited the name and role from constructor class)
        this._technology = technology
    }

    get tech() {           // when you use "get" you cant change the name    
        return this._technology
    }
    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._technology}`)
    }
}

// check console log to see if it works

// let machi = new Contractor(" the Machine", " Front-end")

class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role)  //"super" allow us to go UP a level to parent class so we dont have to repeat the code
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
//check console and type in machi and it will show you REACT
let machi = new Contractor(" the Machine", " React")

//below are more contractors
let bob = new Contractor('Bob', 'Front-end') // refresh and console log simba and see the results- if you dont refresh you wont see it
let simba = new Front('Simba', 'BAck-end', 'Node')  // refresh and console log simba and see the results
// let machi = new Back('The Machine', 'Back-end', 'Node')


let agency = [bob, simba, machi]


//forloop of AGENCY ARRAY above  -- for of is an iterator
for (person of agency) {
    person.sayHello()  // say hello works on BOTH because of polymorph no messy conditional here
}


//console.log  agency

// class teachers{
//     constructor(name,type){
//         this._name = name
//         this._type = type
//         this.gradeLevel = gradeLevel
//     }
//     get name(){
//         return this._name
//     }
//     get type(){
//         return this._type
//     }
//     sayHello(){
//         console.log(`Hello, I am a ${this.type} teacher`)
//     }
// }


// class Contractors extends teachers{
//         constructor(name,type,contractor){
//             super(name,type)
//             this._contractor = contractor
//         }
//         get contractor(){
//             return this.contractor
//         }
//         sayHello(){
//             console.log(`Hello, I am only a  ${this._contractor} and work in brooklyn public shools and cover ${this.gradeLevel}`)
//         }
//     }
