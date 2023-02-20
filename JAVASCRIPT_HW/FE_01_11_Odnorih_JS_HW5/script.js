     //  TASK 1

// let num = +prompt("Write the number of the month to find out its name.", "Number of the month");

// switch(num) {
//     case 1:
//         alert("January");
//         break
//     case 2:
//         alert("February");
//         break
//     case 3:
//         alert("March");
//         break
//     case 4:
//         alert("April");
//         break
//     case 5:
//         alert("May");
//         break
//     case 6:
//         alert("June");
//         break
//     case 7:
//         alert("July");
//         break
//     case 8:
//         alert("August");
//         break
//     case 9:
//         alert("September");
//         break
//     case 10:
//         alert("October");
//         break
//     case 11:
//         alert("November");
//         break
//     case 12:
//         alert("December");
//         break
//     default:
//         alert("Error");
//         break
// }


    //  TASK 2

// let writeNum = +prompt();
// let counter = 0;
// let res;

// function numberCheck() {
//     for (let a = 1; a <= writeNum; a++ ) {
//         if (writeNum % a === 0)
//         counter++
//     }
//     if( counter<=2){
//         res = "Просте";
//     }else{
//         res = "Склдне";
//     }
//     console.log(counter);
//     alert(res)
// }

// numberCheck();

//  TASK 3 

let b = 0;


function max () {
    for (let i = 0; i < arguments.length; i++)
    if (b < arguments[i]) {
        b = arguments[i];
    }
    console.log(b);
}

max(10, 12, 3, 5, 41, 15, 44, 12, 8, 5, 14, 87, 21)
