console.log("TASK 1"); //TASK 1

let textInput = prompt("Введіть текст, щоб дізнатись кількість пробілів");

function sum(textInput) {
    let sum = 0;
for (let i = 0; i <textInput.length;i++) {
    if(textInput[i] == ' '){
        sum++
    }
}
console.log(sum);
}

sum(textInput);

console.log("TASK 2") //TASK 2

let writeMail = prompt("Введіть mail, для преевірки");


function checkMail(txt){
    let a = txt.includes('@');
    let b = txt.startsWith('@');
    let c = txt.endsWith('@'); 
    if (a == true && b == false && c == false){
    console.log("good mail");
} else{
    console.log("bad mail");
}
    
}

checkMail(writeMail);

console.log("TASK 3") //TASK 3


let userText = prompt("Введіть текст, щоб порахувати кількість html");

function sumHtmlElement(userText){
    let userTextSplit = userText.split(' ');
    let sum = 0;
    for(i=0; i<userTextSplit.length; i++){
        if(userTextSplit[i].toLowerCase().includes('html')){
            sum++
        }
    }
    console.log(sum);
}

sumHtmlElement(userText);

console.log("TASK 4") //TASK 4

let userURL = prompt("Введіть посилання");

function checkURL(userURL){

    let newUserURL;
    
    if(userURL.startsWith("https://")){
        newUserURL = userURL.slice(8);
    }else if(userURL.startsWith("http://")){
        newUserURL = userURL.slice(7);
    }else{
        newUserURL = "це не посилання"
    }
    console.log(newUserURL);
}
checkURL(userURL)