const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_-+={}[]|\:;<>?/";

const length = 12;

const pass = [upperCase,symbol,lowerCase,number];

let btn = document.querySelector('button');

let inp = document.querySelector(".Password");

let password = "";
function generatePassword(){
    password = "";
    for(let i=1;i<=12;i++){
        let randomIdx = Math.floor(Math.random()*3);
        let ran = pass[randomIdx];
        let randomChar = Math.floor(Math.random()*ran.length);
        password+=ran[randomChar];
    }
    inp.value=password;
};
btn.addEventListener('click',generatePassword);

document.querySelector(".copy").addEventListener('click',function(){
    inp.select();
    document.execCommand('copy');
})