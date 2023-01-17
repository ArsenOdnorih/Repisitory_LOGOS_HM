

let a = +prompt("Введіть номер місяця, щоб дізнатись пору року.");
let winter = "Зима";
let spring = "Весна";
let summer = "Літо";
let autumn = "Осінь";
let b;
if( a===1 ){
    b = "Cічень";
}else if( a === 2){
    b ="Грудень";
}else if( a === 3){
    b = "Березень";
}else if( a === 4){
    b = "Квітень";
}else if( a === 5){
    b = "Травень";
}else if( a === 6){
    b = "Червень";
}else if( a === 7){
    b = "Липень";
}else if( a === 8){
    b = "Серпень";
}else if( a === 9){
    b = "Вересень";
}else if( a === 10){
    b = "Жовтень";
}else if( a === 11){
    b = "Листопад";
}else if( a === 12){
        b ="Грудень";
}
if(a === 1 || a === 2 || a === 12){
    alert("Пора року - "+ winter + ", " + "Місяць - "+ b);
}else if(a >= 3 && a <= 5){
    alert("Пора року - "+ spring + ", " + "Місяць - "+ b);
}else if(a >= 6 && a <= 8){
    alert("Пора року - "+ summer + ", " + "Місяць - "+ b);
}else if(a >= 9 && a <= 11){
    alert("Пора року - "+ autumn + ", " + "Місяць - "+ b);
}else{
    alert("ERROR");
}