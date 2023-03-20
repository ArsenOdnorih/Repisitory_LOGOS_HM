
// TASK1

const fib = (n) => {
    let f = 0;
    let b = 1;
    for (let i = 1; i <= n; i++){
        let c = b + f;
        b = f
        f = c;
        console.log(c);
    }
}
fib(10)


// TASK2 way1

const geometricProgression1 = function(a,b) {
    let c = 1;
    let sum = 1;
    console.log(c)
    for (let i = 1; i<a; i++){
        
        c *= b;
        sum += c;
        console.log(c);
    }
    console.log(sum);
}
geometricProgression1(5,2)


// TASK2 way2

const geometricProgression2 = function(n,q) {
    let b = 1;
    let sum1 = b * (1 - Math.pow(q,n))/(1-q);
    console.log(sum1)
}
geometricProgression2(4,3)

// TASK3
let a = +prompt("Ввеедіть перше чисто");
let b = +prompt("Ввеедіть друге чисто");
const bot = (a,b) => {

for (let i = a; i < b; i++) {
  for (let j = 2; j <= i; j++) {
    if ((i % j == 0) && (j != i)) {
      break;
    } else {
      console.log(i);
      break;
    }
  }
}
}

bot(a,b);




