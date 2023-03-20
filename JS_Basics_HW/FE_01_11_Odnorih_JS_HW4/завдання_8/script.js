const userNum = +prompt("Введіть число");
const userPower = +prompt("Введіть степінь");
let b = 0;
let a = userNum;

while (b < userPower){
    b++
        if(b===userPower){
            console.log("Число в додатньому степені",a);
            console.log("Число у відмному степені",1/a);
            console.log("Число у степен 0",a/a);
        }
        a = a * a;
}