const userNum = +prompt();
const userPower = +prompt();
let b = 0;
for (let a = userNum; b < userPower; a = a * a){
    b++
        if(b===userPower){
            console.log(a);
            console.log(1/a);
            console.log(a/a);
        }

}