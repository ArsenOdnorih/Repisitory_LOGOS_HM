// Tasck 1 kkk

const person = {
    firstName: "Ivan",
    secondName: "Nikoluk"
}

person.showData = function (){
    console.log(this.firstName + ' ' + this.secondName);
}

person.showData();

const newPerson = { ...person };
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";

newPerson.showData = function (){
    console.log(this.firstName + ' ' + this.secondName);
}

newPerson.showData();


// Tasck 2 

const myMath = {};

myMath.a = 5;
myMath.b = 2;

myMath.sum = function (){
  return console.log(this.a + this.b);
}
myMath.multiplication  = function (){
    return console.log(this.a * this.b);
}
myMath.division   = function (){
    return console.log(this.a / this.b);
}
myMath.subtraction    = function (){
    return console.log(this.a - this.b);
}

myMath.sum();
myMath.multiplication ()
myMath.division();
myMath.subtraction();

console.log(myMath);