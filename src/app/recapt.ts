import { last } from "rxjs";

const username: string | number = 'Alejandro';

const sum = (a: number, b:number) => {
return a + b
}
sum(1,3)
//Los parametros como se mandan extricatamente se tienen que mandar asi 
//Metodo 1
// class Person {
//     age: number;
//     lastName: string;

//     constructor(age:number, lastName: string){
//         this.age = age;
//         this.lastName = lastName
//     }
// }

//Metodo 2 
class Person {

    constructor(public age:number,public lastName: string){
    }
}

const alejandro = new Person(19, 'Loaiza');
alejandro