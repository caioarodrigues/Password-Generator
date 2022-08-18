let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let passwSize = document.querySelector("#value");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("container-password");
const charset = "qwertyuiopasdfghjklçzxcvbnmq1234567890QWERTYUIOPASDFGHJKLÇZXCVBNM@#!$%&";
let newPw = "";

passwSize.innerHTML = sliderElement.value;

slider.oninput = function(){
    passwSize.innerHTML = this.value;
}

function generatePassword(){
    let pw = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pw += charset.charAt(Math.floor(Math.random() * n)); 
    }

    newPw = pw;
    password.innerHTML = pw;
    containerPassword.classList.remove("hide");
}

function copyPassword(){
    navigator.clipboard.writeText(newPw);
    alert("Password copied to your clipboard!");
}