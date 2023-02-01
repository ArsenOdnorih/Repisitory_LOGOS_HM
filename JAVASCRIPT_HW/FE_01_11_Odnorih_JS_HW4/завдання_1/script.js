
let writeNum = +prompt("Введіть число для визначення факторіалу");
let n = 1;

while( writeNum >= 1 ) {
    n = n * writeNum;
    writeNum--
    if (writeNum < 1){
        console.log(n)
    }
}