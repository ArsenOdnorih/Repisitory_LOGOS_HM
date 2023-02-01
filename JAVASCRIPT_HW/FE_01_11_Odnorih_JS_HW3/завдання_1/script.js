
let writeNum = +prompt("Введіть число для визначення факторіалу");

for(let n = 1; writeNum >= 1; writeNum--) {
    n = n * writeNum;
    if (writeNum <= 1){
        console.log(n)
    }
}