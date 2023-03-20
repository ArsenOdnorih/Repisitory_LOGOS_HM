

let result;
right = 0;
mistake=0;
let reply1 = 4;
let reply2 = 4;
let reply3 = 5;
let reply4 = 25;
let reply5 = 0;
let reply6 = 6;
let reply7 = 3;
let reply8 = 5;
let reply9 = 5;
let reply10 = 10;

let question1 =  +prompt("2+2?");
if(question1==reply1){
    right++
}else{
    mistake++
}

let question2 =  +prompt("2*2?");
if(question2==reply2){
    right++
}else{
    mistake++
}
let question3 =  +prompt("3+2?");
if(question3==reply3){
    right++
}else{
    mistake++
}
let question4 =  +prompt("5*5?");
if(question4==reply4){
    right++
}else{
    mistake++
}
let question5 =  +prompt("10-10");
if(question5==reply5){
    right++
}else{
    mistake++
}
let question6 =  +prompt("12-6?");
if(question6==reply6){
    right++
}else{
    mistake++
}
let question7 =  +prompt("1+2?");
if(question7==reply7){
    right++
}else{
    mistake++
}
let question8 =  +prompt("7-2?");
if(question8==reply8){
    right++
}else{
    mistake++
}
let question9 =  +prompt("25/5");
if(question9==reply9){
    right++
}else{
    mistake++
}
let question10 =  +prompt("10-0");
if(question10==reply10){
    right++
}else{
    mistake++
}

console.log(right);
console.log(mistake);

document.write("Правильних відповідей = ", right ," ", "Помилок = ", mistake);
document.write(" ВАШ РЕЗУЛЬТАТ - ");

if(right === 0){
    document.write("ДУЖЕ ПОГАНО")
}else if(right < 3){
    document.write("ПОГАНО")
}else if(right < 6){
    document.write("Маленький Розумник")
}else if(right < 9){
    document.write("Велийкий Розумник")
}else if(right = 10){
    document.write("ТОП Розумник")
}

