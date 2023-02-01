let enterPassword = prompt("Введіть пароль");
let i = 4;
let attempt = 4;

if (enterPassword == i){
    alert("Запрошуємо на сайт!")
}else{
    while(attempt > 0){
        attempt--
        console.log(attempt);
        if(attempt==0){
            alert("Будь ласка спробуйте пізніше!")
        }else{
            enterPassword=prompt();
        }
    }

}