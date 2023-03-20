
let b;
let a = prompt("Введіть ім`я?");
if(a == "Ім'я"){
    b = prompt("Введіть пароль");
}else if(typeof a == "object"){
    b = alert("Вхід скасований");
}else{
   b = alert("Я вас не знаю");
}


if(b === "ЛОГОС"){
    alert("Ласкаво просимо!");
}else if(typeof b == "object"){
    dalert("Вхід скасований");
}else if(typeof a == "object" ){
    //нічого не виконувати
}else if(a !== "Ім'я"){
    //нічого не виконуват
}else if(b !== "ЛОГОС"){
    alert("Пароль невірний");
}

console.log(typeof a)
console.log(typeof b)